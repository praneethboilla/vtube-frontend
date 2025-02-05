import axios from "axios"
import { useEffect, useState } from "react"

const PlayList = () => {
    const [playlist , setPlaylist] = useState([])
    useEffect(() => {
        const getPlayList = async () => {
            await axios.get(`/api/v1/playlist/user/677cbdf9316b7c64a306d783`)
            .then(res => {
                setPlaylist(res.data.data)
            })
        }
        getPlayList();
    },[])
  return (
    <div className="relative h-screen overflow-y-scroll ml-55 pt-18 justify-center">
    <div className="flex flex-wrap gap-5 p-5 bg-[#0F0F0F] overflow-y-auto h-screen">
        {
            playlist.length > 0 ? (
                playlist.map((item) => (
                    <div key={item._id} className="min-w-sm bg-gray-700 h-40 rounded-2xl flex flex-col justify-between">
                        <h1 className="text-white self-center text-xl pt-2">{item.name}</h1>
                        <p className="text-white  self-center">{item.description}</p>
                        <p className="text-white bg-black w-20 self-end px-2.5 m-2 rounded">{`${item.totalVideos} videos`}</p>
                    </div>
                ))
            ) : (
                <p>No Playlist Available</p>
            )
        }
    </div>
</div>
  )
}

export default PlayList