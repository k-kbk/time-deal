interface InputProps {
  type: 'text' | 'password';
  name: string;
  label: string;
  value: string;
  inputStyle?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({
  type,
  name,
  label,
  value,
  inputStyle,
  setValue,
}: InputProps) {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleInput}
        className={`rounded-lg px-4 py-2 outline-none ${inputStyle}`}
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
}
