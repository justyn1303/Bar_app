import { StyledRadiosProps } from "./StyledRadios.types";

const StyledRadios = ({ type, id, label, checked }: StyledRadiosProps) => {
  return (
    <div className="mb-3 form-check py-2">
      <input
        type={type}
        className="form-check-input"
        id={id}
        checked={checked}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {label}
      </label>
    </div>
  );
};

export default StyledRadios;
