import { FC } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

interface CardProps {
  imageUrl: string;
  title: string;
  rating: number;
}

const BigCard: FC<CardProps> = ({ imageUrl, title, rating }) => {
  return (
    <div className='relative mx-2 h-[150px] w-[385px] overflow-hidden rounded-xl border border-[#4682B4] shadow-md'>
      {/* 이미지 */}
      <img src={imageUrl} className='h-full w-full object-cover' />

      {/* 추천순 */}
      <div className='absolute top-2 right-2 flex items-center gap-1 rounded-xl bg-white px-2 text-[12px] font-semibold shadow'>
        <FaThumbsUp className='text-yellow-400' />
        <span>{rating}</span>
      </div>

      {/* 장소 이름 */}
      <div className='absolute bottom-2 left-2 w-[120px] rounded-md bg-white/70 px-3 py-1 text-[14px] font-semibold'>
        {title}
      </div>
    </div>
  );
};

export default BigCard;
