export function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand" />
      <span className="sr-only">Cargando…</span>
    </div>
  )
}
