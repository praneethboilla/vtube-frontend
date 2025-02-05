import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../utils/Card"
import { useNavigate } from "react-router-dom"
import Modal from "../components/modal"
import { useSelector } from "react-redux"


const History = () => {
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);
    const [history, setHistory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        try {
            const getHistory = async () => {
                await axios.get("/api/v1/users/history", { withCredentials: true })
                    .then(response => setHistory(response.data.data))
            }
            getHistory();
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
        <div className="relative ml-55 pt-18 justify-center overflow-y-auto h-screen bg-[#0F0F0F]">
            <div className="flex flex-wrap gap-5 p-5">
                {
                    history.length > 0 ? (
                        history.map((item) => (
                            <Card
                                key={item._id}
                                title={item.title}
                                channelName={item.owner.username}
                                image={item.thumbnail}
                                views={item.views}
                                uploadedDate={item.createdAt}
                                userAvatar={item.owner.avatar}
                                onClick={() => handleSelectedVideo(item._id)}
                            />
                        ))
                    ) : (
                        <p className="text-white">No videos history available</p>
                    )
                }
            </div>
            {isModalOpen && <Modal />}
        </div>
    )
}

export default History