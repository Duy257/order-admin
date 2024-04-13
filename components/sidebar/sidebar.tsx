import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";
import SubSideBar from "./subSideBar";

type Route = {
  name: string;
  id: string;
  href: string;
  children?: Route[];
};

export default function Sidebar1({ routes }: { routes: Route[] }) {
  let [currentTab, setCurrentTab] = useState<string>("Dashboard");
  const router = useRouter();

  const nextRouter = (route: Route) => {
    if (route.children && route.children.length) {
      currentTab === route.id ? setCurrentTab("") : setCurrentTab(route.id);
    } else {
      setCurrentTab(route.id);
      router.push(route.href);
    }
  };

  return (
    <div className="h-screen w-[300px] bg-white z-50 close border-r border-slate-200">
      <div className="w-full flex items-center justify-center">
        <Image
          className="h-[100px] w-[100px]"
          src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
      <div className="pb-60 overflow-auto">
        {routes.map((route: any) => {
          return (
            <div className="border ease-in-out delay-150">
              <div
                onClick={() => nextRouter(route)}
                className={`transition flex items-center hover:cursor-pointer px-4 h-14 rounded-sm ${
                  currentTab === route.id
                    ? "bg-primary hover:bg-secondary"
                    : "hover:bg-gray-300"
                }`}
              >
                <DashboardCustomizeSharpIcon color="primary" fontSize="small" />
                <span
                  className={`text-base font-normal text-black duration-400 ease-in-out no-select ml-2`}
                  style={{
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  {route.name}
                </span>
              </div>
              {currentTab === route.id &&
              route.children &&
              route.children.length ? (
                <div
                  className={`transition${
                    currentTab === route.id
                      ? "visible opacity:1"
                      : "invisible opacity:0"
                  }`}
                >
                  <SubSideBar routes={route.children} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
