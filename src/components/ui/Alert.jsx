const VARIANTS = {
  error: "bg-rose-50 text-rose-700 border-rose-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  info: "bg-primary-50 text-primary-700 border-primary-200",
};

export default function Alert({ children, variant = "info" }) {
  if (!children) return null;
  return (
    <div className={`rounded-lg border px-4 py-2.5 text-sm ${VARIANTS[variant]}`}>
      {children}
    </div>
  );
}
