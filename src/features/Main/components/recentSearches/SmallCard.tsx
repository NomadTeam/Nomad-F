import { FC } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

interface CardProps {
  imageUrl: string;
  title: string;
  rating: number;
  category: string;
}

const SmallCard: FC<CardProps> = ({ imageUrl, title, rating, category }) => {
  return (
    <div className='relative mx-2 h-[135px] w-[145px] overflow-hidden rounded-sm border border-[#4682B4] shadow-md'>
      <img src={imageUrl} alt={title} className='m-auto h-[90px] w-[135px] object-cover pt-1' />
      <div>
        <div className='flex items-center justify-between px-2 pt-1 text-[12px]'>
          <span>{title}</span>
          <span className='flex items-center gap-1 font-semibold'>
            <FaThumbsUp className='text-yellow-400' /> {rating}
          </span>
        </div>
        <span className='block px-2 text-[10px] text-gray-500'>{category}</span>
      </div>
    </div>
  );
};

export default SmallCard;
