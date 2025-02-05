import { useEffect, useState } from "react";
import Card from "../utils/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";

// eslint-disable-next-line react/prop-types
function VideoList({ userId, status }) {
  const navigate = useNavigate();
  const [allVideos, setAllVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchVideos = async (pageNumber) => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const url = new URL('/api/v1/videos', window.location.origin);
      url.searchParams.set('page', pageNumber);
      url.searchParams.set('limit', 10);
      url.searchParams.set('sortBy', 'createdAt');
      url.searchParams.set('sortType', 'desc');
      if (userId) url.searchParams.set('userId', userId);

      const response = await axios.get(url.toString());

      if (response.data.data.length === 0) {
        setHasMore(false);
      } else {
        setAllVideos((prev) => [...prev, ...response.data.data]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setAllVideos([]); // Reset videos when userId changes
    setPage(1);
    setHasMore(true);
    fetchVideos(1);
  }, [userId]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
        hasMore &&
        !loading
      ) {
        fetchVideos(page);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasMore, loading]);

  const handleSelectedVideo = (item) => {
    if (status) {
      navigate(`/watch/${item}`);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 p-5 bg-[#0F0F0F] overflow-y-auto h-screen">
      {allVideos.length > 0 ? (
        allVideos.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            channelName={item.ownerDetails.username}
            image={item.thumbnail}
            views={item.views}
            uploadedDate={item.createdAt}
            userAvatar={item.ownerDetails.avatar}
            onClick={() => handleSelectedVideo(item._id)}
          />
        ))
      ) : (
        <p>No videos available</p>
      )}

      {loading && <p>Loading...</p>}
      {isModalOpen && <Modal />}
    </div>
  );
}

export default VideoList;
