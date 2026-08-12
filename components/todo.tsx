export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="italic text-amber-600 dark:text-amber-500">
      {children}
    </span>
  );
}

export function isTodo(value: string) {
  return value.trim().startsWith("TODO");
}

export function MaybeTodo({ value }: { value: string }) {
  return isTodo(value) ? <Todo>{value}</Todo> : <>{value}</>;
}
