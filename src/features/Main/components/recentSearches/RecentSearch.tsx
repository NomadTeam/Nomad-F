import { smallCardData } from 'src/features/Main/constants/mockData';
import SmallCard from './SmallCard';

const RecentSearch = () => {
  return (
    <section>
      <span className='ml-5 text-[16px] font-semibold'>최근 검색이 많았어요!</span>
      <div className='my-3 flex flex-wrap justify-center space-y-3'>
        {smallCardData.map((item) => (
          <SmallCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RecentSearch;
