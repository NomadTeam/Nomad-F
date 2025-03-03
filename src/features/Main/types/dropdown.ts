export interface DropdownProps {
  isScrolled: boolean;
  selected: string;
  isOpen: boolean;
  toggleDropdown: () => void;
  selectOption: (option: string) => void;
  options: string[];
}
