import { useState } from "react";
import { useRouter } from "next/router";
type Route = {
  name: string;
  id: string;
  href: string;
};

export default function SubSideBar({ routes }: { routes: Route[] }) {
  let [currentTab, setCurrentTab] = useState<string>("");
  const router = useRouter();

  const navigate = (route: Route) => {
    setCurrentTab(route.id);
    router.push(route.href);
  };
  return (
    <div>
      {routes.map((route) => {
        return (
          <div
            onClick={() => navigate(route)}
            className={`my-[1px] transition flex items-center hover:bg-gray-300 hover:cursor-pointer pl-11 h-12 rounded-sm ${
              currentTab === route.id ? "bg-primary" : ""
            }`}
          >
            <span className="text-base font-normal text-black duration-400 ease-in-out">
              {route.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
