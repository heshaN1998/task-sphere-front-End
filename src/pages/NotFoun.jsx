import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50">
      <h1 className="text-3xl font-bold text-primary-700">404</h1>
      <p className="text-slate-500">This page doesn't exist.</p>
      <Link to="/" className="text-sm font-medium text-primary-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
