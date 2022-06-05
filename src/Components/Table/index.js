import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DataTableBasicDemo = (props) => {
  return (
    <div style={{ margin: "40px 0" }}>
      <div className="card">
        <DataTable value={props.products} responsiveLayout="scroll">
          <Column field="name" header="Name"></Column>
          <Column field="email" header="email"></Column>
          <Column field="date" header="birthday"></Column>
          <Column field="gender" header="gender"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableBasicDemo;
