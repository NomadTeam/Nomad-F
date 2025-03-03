import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  isScrolled: boolean;
}

const SearchBar = ({ isScrolled }: SearchBarProps) => {
  return (
    <div
      className={`relative flex items-center ${
        isScrolled
          ? 'mx-10 w-[140px] border-b-2 border-[#4682B4] pb-1'
          : 'mx-10 w-[355px] max-w-md rounded-full border border-[#4682B4] bg-white px-4 py-0.5 pr-10'
      }`}
    >
      <input
        type='text'
        placeholder='SEARCH'
        className={`w-full text-[14px] ${
          isScrolled ? 'bg-transparent focus:outline-none' : 'text-[14px]'
        }`}
      />
      <FiSearch
        className={`absolute right-2 text-[#4682B4] ${
          isScrolled ? 'relative cursor-pointer' : 'top-1/2 -translate-y-1/2 cursor-pointer'
        }`}
        size={18}
      />
    </div>
  );
};

export default SearchBar;
