import { useEffect } from "react"
import Card from "../utils/Card"
import axios from "axios"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
function VideoList({ userId }) {

  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async ({ page = 1, limit = 10, query = '', sortBy = 'createdAt', sortType = 'desc', userId = '' }) => {
      try {
        // Construct the relative URL with query parameters
        const url = new URL('/api/v1/videos', window.location.origin);

        // Add parameters only if they are provided
        if (userId) url.searchParams.set('userId', userId);
        if (query) url.searchParams.set('query', query);
        if (page) url.searchParams.set('page', page);
        if (limit) url.searchParams.set('limit', limit);
        if (sortBy && sortType) {
          url.searchParams.set('sortBy', sortBy);
          url.searchParams.set('sortType', sortType);
        }

        // Make the GET request using axios
        const response = await axios.get(url.toString(),
          // {
          //   withCredentials: true,
          // }
        );

        console.log('Videos fetched successfully');
        setAllVideos(response.data.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos({ userId });

  }, [userId]);

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
          />
        ))
      ) : (
        <p>No videos available</p>
      )}
    </div>
  )
}

export default VideoList