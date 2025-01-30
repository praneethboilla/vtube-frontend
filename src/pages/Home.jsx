import VideoList from '../components/VideoList'
import { useSelector } from 'react-redux'

function Home() {
  const {status} = useSelector((state) => state.auth);
  return (
    <div className="relative h-screen overflow-y-hidden">
      <div className="ml-55 pt-18 justify-center">
        <VideoList status={status}/>
      </div>
    </div>
  )
}

export default Home