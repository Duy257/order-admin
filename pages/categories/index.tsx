import Breadcrumb from "@/components/breadcrumb";
import Table from "@/components/table";

export default function Dashboard() {
  const listLinks = [{ name: "Ngành hàng", href: "/categories" }];
  return (
    <div className="p-8">
      <Breadcrumb listLinks={listLinks} title="Ngành hàng" />
      <div className="mt-8">
        <Table />
      </div>
    </div>
  );
}
