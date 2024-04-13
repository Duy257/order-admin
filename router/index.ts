const routes = [
  {
    name: "Dashboard",
    id: "dashboard",
    href: "/dashboard",
  },
  {
    name: "Quản lý đơn hàng",
    id: "order-management",
    href: "/order-management",
    children: [
      {
        name: "Sản phẩm",
        id: "product",
        href: "/products",
      },
      { name: "Nghành hàng", id: "categories", href: "/categories" },
    ],
  },
];

export default routes;
