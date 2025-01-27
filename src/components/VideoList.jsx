import Card from "../utils/Card"

const cardData = [
  {
    id: 1,
    channelName: 'Card 1',
    title: 'This is the description for card 1.',
    userAvatar: "https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180",
    image: 'https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180',
    views: 4444,
    uploadedDate: 444
  },
  {
    id: 2,
    channelName: 'Card 2',
    title: 'This is the description for card 2.',
    userAvatar: "https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180",
    image: 'https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180',
    views: 4444,
    uploadedDate: 444
  },
  {
    id: 3,
    channelName: 'Card 3',
    title: 'This is the description for card 3.',
    userAvatar: "https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180",
    image: 'https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180',
    views: 4444,
    uploadedDate: 444
  },
  {
    id: 4,
    channelName: 'Card 4',
    title: 'This is the description for card 4  .',
    userAvatar: "https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180",
    image: 'https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180',
    views: 4444,
    uploadedDate: 444
  },
  {
    id: 4,
    channelName: 'Card 4',
    title: 'This is the description for card 4  .',
    userAvatar: "https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180",
    image: 'https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180',
    views: 4444,
    uploadedDate: 444
  },
];

function VideoList() {

  return (
    <div className="flex flex-wrap gap-5 p-5 bg-[#0F0F0F] overflow-y-auto max-h-screen">
      {
        cardData.map((item) => (
          <Card key={item.id}
            title={item.title}
            channelName={item.channelName}
            image={item.image}
            views={item.views}
            uploadedDate={item.uploadedDate}
            userAvatar={item.userAvatar}
          />
        ))
      }
    </div>
  )
}

export default VideoList