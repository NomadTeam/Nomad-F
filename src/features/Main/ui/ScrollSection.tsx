import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import Banner from './Banner';
import { ScrollSectionProps } from 'src/features/Main/types/scrollSection';

const ScrollSection = ({
  isScrolled,
  selected,
  isOpen,
  toggleDropdown,
  selectOption,
  options,
}: ScrollSectionProps) => {
  return (
    <section
      className={`fixed top-[70px] left-1/2 z-40 w-[412px] -translate-x-1/2 transition-all ${
        isScrolled ? 'bg-white' : 'bg-[#FAFAFF]'
      }`}
    >
      <div
        className={`relative flex items-center justify-center ${
          isScrolled
            ? 'h-[70px] bg-[url("/assets/scrollbanner.png")] bg-cover bg-center'
            : 'flex-col space-y-4 p-4'
        }`}
      >
        <SearchBar isScrolled={isScrolled} />
        {!isScrolled && <Banner />}

        <Dropdown
          isScrolled={isScrolled}
          selected={selected}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          selectOption={selectOption}
          options={options}
        />
      </div>
    </section>
  );
};

export default ScrollSection;
