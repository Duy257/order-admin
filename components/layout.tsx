import routes from "@/router";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex bg-white">
        <Sidebar routes={routes} />
        <main className="h-screen overflow-auto w-screen">{children}</main>
      </div>
    </>
  );
}
