// import axios from 'axios'
import VideoList from '../components/VideoList'

// const url = "http://localhost:8000/api/v1/videos"

// "http://localhost:8000/api/v1videos?page=1&limit=10&query=&sortBy=createdAt&sortType=desc&userId="

// const params = {
//   page:1,
//   limit:10,
//   query:'',
//   sortBy:'createdAt',
//   sortType: 'desc',
//   userId:''
// }

// axios.get(url, {params})
// .then(response => {
//   console.log("data", response)
// })
// .catch(error => {
//   console.error('Error:', error);  
// });

function MyVideos() {
  return (
    <div className='ml-55 pt-18 justify-center'>
      <VideoList/>
    </div>
  )
}

export default MyVideos