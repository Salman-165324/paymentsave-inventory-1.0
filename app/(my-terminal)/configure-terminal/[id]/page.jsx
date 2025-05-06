import ConfigureTerminal from "@/components/my-terminal/ConfigureTerminal";
import AdminLayout from "@/components/layout/AdminLayout";

export default function ConfigureTerminalPage({ params }) {
  const { id } = params;
  return (
    <AdminLayout>
      <ConfigureTerminal id={id} />
    </AdminLayout>
  );
}
