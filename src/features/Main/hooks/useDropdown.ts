import { useState } from 'react';

const useDropdown = () => {
  const options = ['가나다순', '추천순'];
  const [selected, setSelected] = useState('정렬 방식 선택');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return { selected, isOpen, toggleDropdown, selectOption, options };
};

export default useDropdown;
