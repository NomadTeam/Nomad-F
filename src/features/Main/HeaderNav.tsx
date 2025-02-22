import { FiSettings } from 'react-icons/fi';

const HeaderNav = () => {
  return (
    <header className='flex h-[80px] items-center justify-between rounded-b-md bg-white px-4 shadow-md'>
      <img src='/assets/logo.png' alt='Logo' className='h-10 pl-4' />
      <button className='text-[#4682B4] transition-colors hover:text-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none'>
        <FiSettings size={24} />
      </button>
    </header>
  );
};

export default HeaderNav;
