import { FC } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

interface MdPickCardProps {
  imageUrl: string;
  title: string;
  category: string;
  location: string;
  likes: number;
  comment: string;
}

const MdPickCard: FC<MdPickCardProps> = ({
  imageUrl,
  title,
  category,
  location,
  likes,
  comment,
}) => {
  return (
    <section className='m-auto flex h-[240px] max-w-[385px] flex-row overflow-hidden rounded-xl border border-[#4682B4] bg-white shadow-lg'>
      <img className='m-[10px] h-[220px] w-[165px] rounded object-cover' src={imageUrl} />
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        <p className='text-gray-500'>{category}</p>
        <p className='text-sm text-gray-500'>{location}</p>
        <span className='flex items-center gap-1 font-semibold'>
          <FaThumbsUp className='text-yellow-400' /> {likes}
        </span>
        <p className='mt-4 text-sm text-gray-600 italic'>" {comment} "</p>
      </div>
    </section>
  );
};

export default MdPickCard;
