import { FiHome, FiHeart, FiMenu, FiUser } from 'react-icons/fi';

const FooterNav = () => {
  return (
    <nav className='fixed bottom-0 w-[412px] rounded-b-xl border-t border-[#A9A9A9] bg-white shadow-lg'>
      <ul className='flex items-center justify-around px-6 py-4'>
        {/* 홈 버튼 */}
        <li className='flex flex-col items-center text-[#4682B4]'>
          <FiHome size={28} />
          <span className='mt-1 text-xs'>HOME</span>
        </li>

        {/* 좋아요 버튼 */}
        <li className='flex flex-col items-center text-[#696969]'>
          <FiHeart size={28} />
          <span className='mt-1 text-xs'>LIKE</span>
        </li>

        {/* 카테고리 버튼 */}
        <li className='flex flex-col items-center text-[#696969]'>
          <FiMenu size={28} />
          <span className='mt-1 text-xs'>CATEGORY</span>
        </li>

        {/* 프로필 버튼 */}
        <li className='flex flex-col items-center text-[#696969]'>
          <FiUser size={28} />
          <span className='mt-1 text-xs'>PROFILE</span>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
