export default function InputField({
  label,
  placeholder,
}) {
  return (
    <div className="space-y-2">

      <label className="body-text font-semibold uppercase text-text-main">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="input h-16 rounded-2xl"
      />
    </div>
  );
}