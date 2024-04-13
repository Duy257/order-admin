import Breadcrumb from "@/components/breadcrumb";
import Table from "@/components/table";

export default function Dashboard() {
  const listLinks = [{ name: "Sản phẩm", href: "/products" }];
  return (
    <div className="p-8">
      <Breadcrumb listLinks={listLinks} title="Sản Phẩm" />
      <div className="mt-8">
        <Table />
      </div>
    </div>
  );
}
