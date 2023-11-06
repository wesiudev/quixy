export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full overflow-x-hidden">{children}</div>;
}
