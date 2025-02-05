import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideVideoList from '../components/SideVideoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

function Player() {
    const { videoId } = useParams();  // Get the videoId from the URL params
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);
    const [isSub, setIsSub] = useState(false);

    const handleSub = async (subId) => {
        try {
            const response = await axios.post(`/api/v1/subscriptions/c/${subId}`,{},{withCredentials: true})
            if(response.data.data.subscribed){
                setIsSub(true)
            } else {
                setIsSub(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLikeDislike = async () => {
        try {
            const response = await axios.post(`/api/v1/likes/toggle/v/${videoId}`, {}, { withCredentials: true })
            if (response.data.data.isLiked) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        } catch (error) {
            console.error("Error toggling like/dislike:", error);
        }
    };
    
    useEffect(() => {
        if (!videoId) {
            setError('No video ID provided');
            setLoading(false);
            return;
        }

        const getVideoById = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/v1/videos/${videoId}`, { withCredentials: true });
                const videoData = response.data?.data[0];
                setVideo(videoData);
                  // Check if user has liked the video
                  if (videoData?.isLiked) {
                    setLiked(true);
                } else {
                    setLiked(false);
                }

                if(videoData.owner.isSubscribed){
                    setIsSub(true);
                } else {
                    setIsSub(false);
                }

                setLoading(false);  // Stop loading after data is fetched
            } catch (err) {
                console.error('Error fetching video:', err);
                setError('Failed to load video');
                setLoading(false);  // Stop loading on error
            }
        };

        getVideoById();
    }, [videoId]);

    if (loading) {
        return <div className='bg-[#0F0F0F] h-screen'>Loading video...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex ml-55 pt-23 bg-[#0F0F0F] h-full">
            <div className='flex-2'>
                {video?.videoFile ? (
                    <div>
                        <video controls width={"100%"} autoPlay controlsList="nodownload" preload='auto' className='rounded-xl'>
                            <source src={video.videoFile} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h1 className='text-white text-lg font-bold py-2'>{video.title}</h1>
                        <div className='flex pb-5 justify-between'>
                            <div className='flex items-center'>
                                <img src={video.owner.avatar} alt="Owner Avatar" className="w-10 h-10 object-cover rounded-full" />
                                <div className='px-2 items-center justify-center pr-5'>
                                    <h2 className='text-white text-base font-bold'>{video.owner.username}</h2>
                                    <h3 className='text-gray-500 text-sm'>{video.owner.subscribersCount} subscribers</h3>
                                </div>
                                {
                                    isSub ? (
                                        <button onClick={() => handleSub(video.owner._id)} className='bg-[#272727] px-4 rounded-full h-9 self-center text-white'>
                                            Subscribed
                                        </button>
                                    ) : (
                                        <button onClick={() => handleSub(video.owner._id)} className='bg-purple-700 px-4 rounded-full hover:bg-purple-900 h-9 self-center'>
                                            Subscribe
                                        </button>
                                    )
                                }
                            </div>
                            <div className='flex self-center'>
                                <div className="flex space-x-8  bg-[#272727] px-4  h-9 rounded-full">
                                    {/* Like Button */}
                                    <button
                                        onClick={handleLikeDislike}
                                        className={`transition duration-200 
                                    ${liked ? 'text-purple-700' : 'text-white hover:text-purple-500'}`}
                                    >
                                        <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                                    </button>
                                </div>
                                <div className='ml-5'>
                                    <button
                                        className={`transition duration-200 px-4 h-9 text-white hover:text-purple-500 bg-[#272727] rounded-full`}
                                    >
                                        <FontAwesomeIcon icon={faShare} className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-25 bg-[#272727] rounded-2xl'>

                        </div>
                    </div>
                ) : (
                    <div>Video file not available</div>
                )}
            </div>
            <div className='flex-1'>
                <SideVideoList />
            </div>
        </div>
    );
}

export default Player;

