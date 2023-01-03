import Item from "./components/Item";

const Drawer = () => {
  return (
    <section>
      <ul className="nav flex-column bg-light" style={{ height: "92vh" }}>
        <div id="accordion">
          <Item
            id="register"
            title="Cadastro"
            subTitles={[
              { label: "Clientes", url: "client" },
              { label: "Banco", url: "bank" },
            ]}
          />
          <Item
            id="admin"
            title="Administrador"
            subTitles={[{ label: "Empresas", url: "company" }]}
          />
        </div>
      </ul>
    </section>
  );
};

export default Drawer();
