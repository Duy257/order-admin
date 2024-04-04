import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";

type Route = {
  name: string;
  id: string;
  href: string;
  children?: Route[];
};

export default function Sidebar1(routes: any) {
  let [currentTab, setCurrentTab] = useState<string>("Dashboard");
  const router = useRouter();

  const nextRouter = (route: Route) => {
    if (route.children && route.children.length) {
      currentTab === route.id ? setCurrentTab("") : setCurrentTab(route.id);
    } else {
      router.push(route.href);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-full w-[260px] bg-white z-50 close border-r border-slate-500">
      <div className="h-[60px] w-full flex items-center">
        <i className="bx bxl-c-plus-plus"></i>
        <Image
          src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="pt-12 pb-60 overflow-auto">
        {routes.routes.map((route: any) => {
          return (
            <div className="border transition ease-in-out delay-150">
              <div
                onClick={() => nextRouter(route)}
                className={`flex items-center hover:bg-sky-700 hover:cursor-pointer px-4 h-14 rounded-sm ${
                  currentTab === route.id ? "bg-sky-700" : ""
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
              {currentTab === route.id ? (
                <div
                  className={`ml-3 transition-all ${
                    currentTab === route.id ? "visible" : "invisible"
                  }`}
                >
                  <Link
                    className="flex items-center hover:bg-sky-700 hover:cursor-pointer pl-8 h-10 rounded-sm"
                    href="#"
                  >
                    <span className="text-base font-normal text-black duration-400 ease-in-out">
                      Sub1
                    </span>
                  </Link>
                  <Link
                    className="flex items-center hover:bg-sky-700 hover:cursor-pointer pl-8 h-10 rounded-sm"
                    href="#"
                  >
                    <span className="text-base font-normal text-black duration-400 ease-in-out">
                      Sub2
                    </span>
                  </Link>
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
