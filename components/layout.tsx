import Sidebar from "./sidebar";
import Sidebar1 from "./sidebar1/sidebar1";

export default function Layout({ children }: { children: React.ReactNode }) {
  const routes = [
    {
      name: "Dashboard",
      id: "dashboard",
      href: "/dashboard",
      children: [
        {
          name: "Sub1",
          id: "sub1",
          href: "/sub1",
        },
        { name: "Sub2", id: "sub2", href: "/sub2" },
      ],
    },
  ];
  return (
    <>
      <div className="flex">
        <Sidebar1 routes={routes} />
        <main className="h-screen overflow-auto w-screen">{children}</main>
      </div>
    </>
  );
}
