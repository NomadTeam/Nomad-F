import SearchBar from './SearchBar';
import Banner from './Banner';
import Dropdown from './Dropdown';

const ScrollSection = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <section
      className={`fixed top-[70px] left-1/2 z-40 w-[412px] -translate-x-1/2 transition-all ${
        isScrolled ? 'bg-white' : 'bg-[#FAFAFF] pt-4'
      }`}
    >
      <div
        className={`relative flex items-center justify-center ${
          isScrolled
            ? 'h-[70px] bg-[url("/assets/scrollbanner.png")] bg-cover bg-center'
            : 'flex-col space-y-3'
        }`}
      >
        <SearchBar isScrolled={isScrolled} />
        {!isScrolled && <Banner />}

        <Dropdown isScrolled={isScrolled} />
      </div>
    </section>
  );
};

export default ScrollSection;
