import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useDropdown from 'src/features/Main/hooks/useDropdown';

const Dropdown = ({ isScrolled }: { isScrolled: boolean }) => {
  const { selected, isOpen, toggleDropdown, selectOption, options } = useDropdown();

  const handleSelectOption = (option: string) => () => {
    selectOption(option);
  };

  return (
    <div className={`relative w-[120px] ${isScrolled ? 'mx-10' : 'mb-1 ml-5 self-start'}`}>
      <button
        onClick={toggleDropdown}
        className='flex w-full items-center justify-between rounded-md border border-[#4682B4] bg-white px-2 py-1 text-xs text-[#343434]'
      >
        {selected}
        {isOpen ? (
          <FiChevronUp size={16} className='text-[#4682B4]' />
        ) : (
          <FiChevronDown size={16} className='text-[#4682B4]' />
        )}
      </button>
      {isOpen && (
        <ul className='absolute top-full left-0 w-full rounded-md border border-[#4682B4] bg-white'>
          {options.map((option, index) => (
            <li
              key={option}
              onClick={handleSelectOption(option)}
              className={`cursor-pointer px-2 py-1 text-xs text-[#343434] ${
                index !== 0 ? 'border-t border-[#4682B4]' : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
