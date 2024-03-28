import Layout from "@/components/layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="h-[10000px] w-full flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-700">Welcome to the dashboard</p>
      </div>
    </Layout>
  );
}
