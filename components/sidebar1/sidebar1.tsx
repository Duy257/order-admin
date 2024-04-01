import Link from "next/link";
import "./sidebar1.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

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
    <div className="fixed top-0 left-0 h-full w-[260px] bg-black z-50 close">
      <div className="h-[60px] w-full flex items-center">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="text-2xl text-white font-semibold">CodingLab</span>
      </div>
      <div className="pt-12 pb-60 overflow-auto">
        {routes.routes.map((route: any) => {
          return (
            <div className="">
              <div
                onClick={() => nextRouter(route)}
                className={`flex items-center hover:bg-sky-700 hover:cursor-pointer px-4 h-14 rounded-sm ${
                  currentTab === route.id ? "bg-sky-700" : ""
                }`}
              >
                <span className="text-base font-normal text-white duration-400 ease-in-out">
                  {route.name}
                </span>
              </div>
              <div
                className={`${
                  currentTab === route.id ? "visible" : "invisible"
                }`}
              >
                <Link
                  className="flex items-center hover:bg-sky-700 hover:cursor-pointer pl-8 h-10 rounded-sm"
                  href="#"
                >
                  <span className="text-base font-normal text-white duration-400 ease-in-out">
                    Sub1
                  </span>
                </Link>
                <Link
                  className="flex items-center hover:bg-sky-700 hover:cursor-pointer pl-8 h-10 rounded-sm"
                  href="#"
                >
                  <span className="text-base font-normal text-white duration-400 ease-in-out">
                    Sub2
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
