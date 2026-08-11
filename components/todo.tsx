export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="italic text-amber-600 dark:text-amber-500">
      {children}
    </span>
  );
}
