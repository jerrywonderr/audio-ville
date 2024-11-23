import { useController, useFormContext } from "react-hook-form";
import { ITextInputProps } from "./interface";

const TextInput = ({
  label,
  placeholder,
  name,
  type = "text",
}: ITextInputProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { value, onChange, onBlur } = field;
  return (
    <div className="flex flex-col gap-y-2">
      {label ? <label htmlFor={`$-${name}`}>{label}</label> : null}
      <input
        id={`$-${name}`}
        type={type}
        placeholder={placeholder}
        className="text-center text-fuchsia-500 font-mono font-bold outline-8 outline-fuchsia-500  bg-fuchsia-100 px-4 py-3 rounded-md"
      />
    </div>
  );
};

export default TextInput;
