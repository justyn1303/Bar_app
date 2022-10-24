export interface StyledInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<{ value: string[] | unknown }>) => void;
  touched?: boolean;
  error?: string;
}
