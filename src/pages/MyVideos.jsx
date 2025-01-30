// import { useEffect } from 'react';
import VideoList from '../components/VideoList';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Modal from '../components/modal';

function MyVideos() {

  // const navigate = useNavigate();

  const { status, userData } = useSelector((state) => state.auth);
  const userId = userData?._id;

  // useEffect(() => {
  //   if (!status) {
  //     navigate('/login');
  //   }
  // }, [status, navigate])

  return (
    <div className="relative h-screen overflow-y-scroll">
      <div className='ml-55 pt-18 justify-center'>
        {
          status ? (<VideoList userId={userId} status={status} />)
            :
            (<Modal/>)
        }
      </div>
    </div>
  )
}

export default MyVideos