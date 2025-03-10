import BigCard from './BigCard';
import { bigCardData } from 'src/features/Main/constants/mockData';

const RecentWeather = () => {
  return (
    <section>
      <span className='ml-5 text-[16px] font-semibold'>요즘 날씨에 여긴 어때?</span>
      <div className='my-3 flex flex-wrap justify-center space-y-3'>
        {bigCardData.map((item) => (
          <BigCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RecentWeather;
