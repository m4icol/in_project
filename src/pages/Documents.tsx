import { DataTableDemo } from "@/components/DataTable";
import Layout from "../layout/Layout";

export function Documents() {
  return (
    <Layout>
      <div>
        <p className="text-CS-text-little-white font-semibold">HEY, USERNAME</p>
        <h1 className="text-2xl text-CS-text-hard-white font-bold">
          INFORMES (COMERCIAL)
        </h1>
      </div>
      <div className="flex flex-col mt-5 py-5 border-CS-border-component border-t-2">
        <h2 className="text-2xl text-CS-text-hard-white font-bold">TABLA</h2>
        <DataTableDemo></DataTableDemo>
      </div>
    </Layout>
  );
}
