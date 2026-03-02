export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
