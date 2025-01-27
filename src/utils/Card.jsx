/* eslint-disable react/prop-types */

function Card({ image, title, channelName, views, uploadedDate, userAvatar }) {
  return (
    <div className="bg-[#0F0F0F] rounded-lg overflow-hidden flex flex-col w-full max-w-100">
      <img src={image} alt="Card Image 1" className="w-full h-50 object-cover" />
      <div className="p-4">
        <div className='flex flex-row items-center'>
          <img src={userAvatar} alt="Card Image 1" className="w-10 h-10 object-cover rounded-full" />
          <div className='pl-3'>
            <p className="text-white mt-2 text-base font-bold font-sans">{title}</p>
            <h3 className="text-sm font-semibold text-white">{channelName}</h3>
            <p className='text-white text-sm'>{`${views} views`} <span>{`@ ${uploadedDate} years ago`}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
