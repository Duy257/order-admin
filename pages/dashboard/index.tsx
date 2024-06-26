import Breadcrumb from "@/components/breadcrumb";
import Table from "@/components/table";

export default function Dashboard() {
  const listLinks = [{ name: "Dashboard", href: "/dashboard" }];
  return (
    <div className="p-8">
      <Breadcrumb listLinks={listLinks} title="Đơn hàng" />
      <div className="mt-8">
        <Table />
      </div>
    </div>
  );
}
