import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../utils/Card"
import { useNavigate } from "react-router-dom"
import Modal from "../components/modal"
import { useSelector } from "react-redux"


const Liked = () => {
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);
    const [likedVideos, setLikedVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        try {
            const getLikedVideos = async () => {
                await axios.get("/api/v1/likes/videos", { withCredentials: true })
                    .then(response => setLikedVideos(response.data.data))
            }
            getLikedVideos();
        } catch (error) {
            console.log(error)
        }
    }, [])


    const handleSelectedVideo = (item) => {
        if (status) {
            navigate(`/watch/${item}`);
        } else {
            setIsModalOpen(true); // This opens the modal
        }
    };

    return (
        <div className="relative h-screen overflow-y-scroll ml-55 pt-18 justify-center">
            <div className="flex flex-wrap gap-5 p-5 bg-[#0F0F0F] overflow-y-auto h-screen">
                {
                    likedVideos.length > 0 ? (
                        likedVideos.map((item) => (
                            <Card
                                key={item.likedVideos._id}
                                title={item.likedVideos.title}
                                channelName={item.likedVideos.ownerDetails.username}
                                image={item.likedVideos.thumbnail}
                                views={item.likedVideos.views}
                                uploadedDate={item.likedVideos.createdAt}
                                userAvatar={item.likedVideos.ownerDetails.avatar}
                                onClick={() => handleSelectedVideo(item.likedVideos._id)}
                            />
                        ))
                    ) : (
                        <p className="text-white">No videos available</p>
                    )
                }
            </div>
            {isModalOpen && <Modal />}
        </div>
    )
}

export default Liked
