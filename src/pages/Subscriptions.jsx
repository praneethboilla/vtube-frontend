import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const Subscriptions = () => {
    const { userData } = useSelector((state) => state.auth);
    const [subscribed, setSubscribed] = useState([]);
    useEffect(() => {
        const subTo = async() => {
            await axios.get(`/api/v1/subscriptions/u/${userData._id}`)
            .then(res => setSubscribed(res.data.data))
        }
        subTo();
    },[])
    return (
        <div className="relative h-screen overflow-y-scroll ml-55 pt-18 justify-center">
            <div className="flex flex-wrap gap-5 p-5 bg-[#0F0F0F] overflow-y-auto h-screen">
                {
                    subscribed.length > 0 ? (
                            subscribed.map((item) => (
                                <div key={item.subscribedChannel._id} >
                                   <img src={item.subscribedChannel.avatar} className="w-40 h-40 object-cover rounded-full"/>
                                   <h1 className="flex text-white justify-center text-lg pt-2">{item.subscribedChannel.username}</h1>
                                   
                                </div>
                            ))
                    ) : (
                        <p className="text-white">Not Subscribed</p>
                    )
                }
            </div>
        </div>
    )
}

export default Subscriptions