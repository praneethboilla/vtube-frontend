/* eslint-disable react/prop-types */

import TimeAgo from "./TimeAgo"

function Card({ image, title, channelName, views, uploadedDate, userAvatar, onClick }) {
  return (
    <div className="bg-[#0F0F0F] rounded-lg overflow-hidden flex flex-col w-full max-w-100" onClick={onClick}>
      <img src={image} alt="Card Image 1" className="w-full h-50 object-cover" />
      <div className="p-2">
        <div className='flex flex-row items-center'>
          <img src={userAvatar} alt="Card Image 1" className="w-10 h-10 object-cover rounded-full" />
          <div className='pl-3'>
            <p className="text-white mt-2 text-base font-bold font-sans">{title}</p>
            <h3 className="text-sm font-semibold  text-gray-500 ">{channelName}</h3>
            <div className="flex items-center">
              <p className=' text-gray-500 text-sm pr-2'>{`${views} views`}</p>
              <TimeAgo dateString={uploadedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
