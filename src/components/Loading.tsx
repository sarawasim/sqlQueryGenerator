export default function Loading() {
  return (
    <div
      className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-slate-300 rounded-full dark:text-slate-200"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
