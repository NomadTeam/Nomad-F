import HeaderNav from 'src/features/Main/HeaderNav';
import FooterNav from 'src/features/Main/FooterNav';

const MainPage = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <div className='mx-auto w-[412px]'>
        {/* 상단 네비바 */}
        <HeaderNav />

        {/* 메인 콘텐츠 */}
        <div className='w-full flex-grow bg-gray-100 p-40'>메인 컨텐츠 추가 예정</div>

        {/* 하단 네비바 */}
        <FooterNav />
      </div>
    </main>
  );
};

export default MainPage;
