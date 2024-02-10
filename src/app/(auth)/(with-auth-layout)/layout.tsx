export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>Inner layout</h3>
      {children}
    </div>
  );
}
