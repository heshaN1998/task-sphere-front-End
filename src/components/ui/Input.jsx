export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  disabled = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full rounded-lg border px-3 py-2 text-sm text-slate-800 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-primary-200
          disabled:bg-slate-100
          ${error ? "border-rose-400 focus:ring-rose-200" : "border-slate-300 focus:border-primary-400"}
        `}
      />
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}
