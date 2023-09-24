import Header from "./Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full font-coco">
      <Header />
      {children}
    </div>
  );
}
