import { FaCalendarAlt } from "react-icons/fa";

export default function DateField({
  label,
}) {
  return (
    <div className="space-y-2">

      <label className="body-text font-semibold uppercase text-text-main">
        {label}
      </label>

      <div className="relative">

        <input
          type="date"
          className="input pr-12"
        />

        <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-text-soft" />
      </div>
    </div>
  );
}