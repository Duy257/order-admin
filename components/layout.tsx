import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="h-screen overflow-auto w-screen">{children}</main>
      </div>
    </>
  );
}