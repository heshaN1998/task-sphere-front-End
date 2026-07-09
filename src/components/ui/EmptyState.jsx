export default function EmptyState({ message = "Nothing here yet", actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <p className="text-sm text-slate-500">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
