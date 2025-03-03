import HeaderNav from 'src/features/Main/ui/HeaderNav';
import FooterNav from 'src/features/Main/ui/FooterNav';
import useScrollState from 'src/features/Main/hooks/useScrollState';
import useDropdown from 'src/features/Main/hooks/useDropdown';
import ScrollSection from 'src/features/Main/ui/ScrollSection';
import SmallCard from 'src/features/Main/ui/SmallCard';
import BigCard from 'src/features/Main/ui/BigCard';
import { smallCardData, bigCardData } from 'src/features/Main/constants/mockData';

const MainPage = () => {
  const isScrolled = useScrollState(60);
  const { selected, isOpen, toggleDropdown, selectOption, options } = useDropdown(
    '정렬 방식 선택',
    ['가나다순', '추천순'],
  );

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='relative w-[412px] bg-[#FAFAFF] pt-[70px] pb-[80px]'>
        <HeaderNav />
        <ScrollSection
          isScrolled={isScrolled}
          selected={selected}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          selectOption={selectOption}
          options={options}
        />
        <div className={`${isScrolled ? 'h-[180px]' : 'h-[280px]'}`} />

        <section>
          <span className='ml-5 text-[16px] font-semibold'>최근 검색이 많았어요!</span>
          <div className='my-3 flex flex-wrap justify-center space-y-3'>
            {smallCardData.map((item, index) => (
              <SmallCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <span className='ml-5 text-[16px] font-semibold'>요즘 날씨에 여긴 어때?</span>
          <div className='my-3 flex flex-wrap justify-center space-y-3'>
            {bigCardData.map((item, index) => (
              <BigCard key={index} {...item} />
            ))}
          </div>
        </section>

        <FooterNav />
      </div>
    </main>
  );
};

export default MainPage;
