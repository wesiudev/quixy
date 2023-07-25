export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full min-h-screen bg-rose-300">{children}</div>;
}
