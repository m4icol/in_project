import { Checkbox } from "./CheckBox";

export function DocumentsFilter() {
  return (
    <aside className="bg-CS-component-white border-2 border-CS-border-component py-8 px-10 shadow-lg rounded-3xl w-1/3 h-screen flex flex-col gap-6">
      <h3 className="text-xl text-CS-text-hard-white font-bold">CATEGORIAS</h3>

      <Checkbox name="MOSTRAR TODOS" id="checkAll"></Checkbox>
      <div className="w-full h-0.5 bg-CS-border-component rounded-full"></div>
      <Checkbox name="IDENTIFICACION" id="userID"></Checkbox>
    </aside>
  );
}
