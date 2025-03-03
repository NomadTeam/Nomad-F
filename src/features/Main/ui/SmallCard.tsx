import { FC } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

interface CardProps {
  imageUrl: string;
  title: string;
  rating: number;
}

const SmallCard: FC<CardProps> = ({ imageUrl, title, rating }) => {
  return (
    <div className='relative mx-2 h-[140px] w-[115px] overflow-hidden rounded-xl border border-[#4682B4] shadow-md'>
      <img src={imageUrl} alt={title} className='h-full w-full object-cover' />
      <div className='absolute bottom-0 flex w-full flex-col border-t border-white bg-black/70 p-1 pl-2 text-[12px] text-white'>
        <span className='pb-1 break-words'>{title}</span>
        <span className='flex items-center gap-1'>
          <FaThumbsUp className='text-yellow-400' /> {rating}
        </span>
      </div>
    </div>
  );
};

export default SmallCard;
