import { FiSettings } from 'react-icons/fi';

const HeaderNav = () => {
  return (
    <header className='fixed top-0 z-20 flex h-[70px] w-[412px] items-center justify-between rounded-t-xl border-b border-[#EFEFEF] bg-white px-6 drop-shadow-sm'>
      <img src='/assets/logo.png' alt='Logo' className='h-10' />
      <button className='text-[#4682B4] transition-colors hover:text-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none'>
        <FiSettings size={24} />
      </button>
    </header>
  );
};

export default HeaderNav;
