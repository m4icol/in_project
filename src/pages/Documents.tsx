import { DocumentsFilter } from "../components/DocsFilter";
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
      <div className="flex flex-row w-full gap-16 mt-8">
        <DocumentsFilter></DocumentsFilter>
        <div className="w-full py-8 flex flex-col gap-5">
          <h2 className="text-xl text-CS-text-hard-white font-bold">
            TABLA CLIENTES
          </h2>
          <div className="w-full h-0.5 bg-CS-border-component rounded-full"></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
