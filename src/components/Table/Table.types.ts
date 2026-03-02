export interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  disabled?: boolean;
}
