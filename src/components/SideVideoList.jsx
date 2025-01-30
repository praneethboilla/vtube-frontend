import axios from "axios";
import { useEffect, useState } from "react";
import TimeAgo from "../utils/TimeAgo";
import { useNavigate } from "react-router-dom"


function SideVideoList() {

    const [allVideo, setAllVideos] = useState([])
    const navigate = useNavigate();

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

        fetchVideos({});

    }, []);

    const handleSelectedVideo = (item) => {
        navigate(`/watch/${item}`);
    };

    return (
        <div className="px-3">
            {
                allVideo.map((item) => (
                    <div key={item._id} className="flex pb-2" onClick={() => handleSelectedVideo(item._id)}>
                        <div className="flex-2 self-center">
                            <img className="rounded-xl" src={item.thumbnail} />
                        </div>
                        <div className="flex-3 pl-2">
                            <h1 className='text-white text-base font-bold'>{item.title}</h1>
                            <h2 className='text-gray-500 text-base'>{item.ownerDetails.username}</h2>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-500 pr-2">{`${item.views} views`}</p>
                                <TimeAgo dateString={item.createdAt} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SideVideoList