export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  rows = 3,
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full rounded-lg border px-3 py-2 text-sm text-slate-800 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-primary-200
          ${error ? "border-rose-400 focus:ring-rose-200" : "border-slate-300 focus:border-primary-400"}
        `}
      />
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}
