import { useState } from 'react';

const useDropdown = (defaultSelected: string, optionList: string[]) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);
  const options = optionList;

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return { selected, isOpen, toggleDropdown, selectOption, options };
};

export default useDropdown;
