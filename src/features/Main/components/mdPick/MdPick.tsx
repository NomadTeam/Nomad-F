import MdPickCard from './MdPickCard';
import { mdPickData } from 'src/features/Main/constants/mockData';

const MdPick = () => {
  return (
    <section>
      <span className='ml-5 text-[16px] font-semibold'>MD PICK!</span>
      <div className='my-3'>
        <MdPickCard {...mdPickData} />
      </div>
    </section>
  );
};

export default MdPick;
