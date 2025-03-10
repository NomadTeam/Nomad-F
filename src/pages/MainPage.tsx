import FooterNav from 'src/shared/components/FooterNav';
import ScrollSection from 'src/features/Main/components/header/ScrollSection';
import HeaderNav from 'src/shared/components/HeaderNav';
import RecentSearch from 'src/features/Main/components/recentSearches/RecentSearch';
import RecentWeather from 'src/features/Main/components/recentWeathers/RecentWeather';
import useScrollState from 'src/features/Main/hooks/useScrollState';
import MdPick from 'src/features/Main/components/mdPick/MdPick';

const MainPage = () => {
  const isScrolled = useScrollState(60);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='relative w-[412px] bg-[#FAFAFF] pt-[70px] pb-[80px]'>
        <HeaderNav />
        <ScrollSection isScrolled={isScrolled} />
        <div className={`${isScrolled ? 'h-[180px]' : 'h-[280px]'}`} />
        <RecentSearch />
        <MdPick />
        <RecentWeather />
        <FooterNav />
      </div>
    </main>
  );
};

export default MainPage;
