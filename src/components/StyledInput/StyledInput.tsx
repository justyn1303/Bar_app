import { StyledInputProps } from "./StyledInput.types";

const StyledInput = ({
  label,
  type,
  id,
  placeholder,
  onChange,
  touched,
  error,
}: StyledInputProps) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <div className="col">
          <input
            placeholder={placeholder}
            type={type}
            className="form-control"
            id={id}
            onChange={onChange}
          />
        </div>
      </div>
      {touched && !!error ? <div>{error}</div> : null}
    </>
  );
};

export default StyledInput;
