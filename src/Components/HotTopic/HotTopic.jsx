import hot_topic1 from '../../assets/hot_topic.png'
import { FaFire } from "react-icons/fa";

const HotTopicCard = ({ imageSrc, cityName, views, tours, bookings, price }) => {
  return (
    <div className='h-[400px] w-[265px] bg-[#F1F1F1]'>
      <img className='' src={hot_topic1} alt="Hot topic" />
      <div className='flex items-center justify-center bg-[#3C669E]'>
        <FaFire className='text-red-500' />
        <p className='text-white text-base'>{cityName}</p>
      </div>
      <div className='flex flex-col'>
        <p className='pt-5 pl-5'>Lượt xem: {views}</p>
        <p className='pt-5 pl-5'>Số tour: {tours}</p>
        <p className='pt-5 pl-5'>Số lượng khách đã đặt: {bookings}</p>
        <p className='pt-5 pl-5'>Giá: {price}</p>
      </div>
    </div>
  );
};

const HotTopic = () => {
  const hotTopics = [
    {
      imageSrc: '../../assets/hot_topic.png',
      cityName: 'Thành phố hồ Chí Minh',
      views: 1000,
      tours: 5,
      bookings: 20,
      price: '$100',
    },
  ];

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="w-[1070px] h-[587px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="mt-10 text-3xl">Địa điểm hot</h2>
          <p className="mt-6 text-lg">Xem tất cả</p>
        </div>
        <div className="flex justify-between">
          {hotTopics.map((topic, index) => (
            <HotTopicCard key={index} {...topic} />
          ))}
          {hotTopics.map((topic, index) => (
            <HotTopicCard key={index} {...topic} />
          ))}
          {hotTopics.map((topic, index) => (
            <HotTopicCard key={index} {...topic} />
          ))}
          {hotTopics.map((topic, index) => (
            <HotTopicCard key={index} {...topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotTopic;
