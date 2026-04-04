export default function InputField({
  type = "text",
  value,
  onChange,
  placeholder,
  error
}) {
  return (
    <div className="mb-3">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-pink-400"
      />

      {error && (
        <div className="mt-2 p-2 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}
    </div>
  );
}