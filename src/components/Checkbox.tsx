interface CheckboxProps {
  id: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, id }) => {
  return (
    <div className="bg-CS-component-white  rounded-full py-3 px-3 flex flex-row gap-3 border-2 border-CS-border-component">
      <input type="radio" id={id} name={name} value="text" className="w-9" />
      <label htmlFor={id} className="font-semibold">
        {name}
      </label>
    </div>
  );
};
