export default function SelectField({
  label,
  options = [],
}) {
  return (
    <div className="space-y-2">

      <label className="body-text font-semibold uppercase text-text-main">
        {label}
      </label>

      <select className="input h-16 rounded-2xl">

        {options.map((item, index) => (

          <option key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}