import { useState } from "react";
import Row from "./Row";
import { Table, Button, Form } from "react-bootstrap";
import data from "./Data";

function CustomTable() {
  const [rows, setRows] = useState(data);

  const handleChange = (index, e) => {
    const rowIndex = index;
    const { name, value } = e.target;
    const colName = name;
    const inputValue = value;
    const rowsInput = [...rows];
    rowsInput[rowIndex][colName] = inputValue;
    setRows(rowsInput);
  };

  const addRow = () => {
    const rowInputs = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    };
    setRows([...rows, rowInputs]);
  };

  const deleteRow = (index) => {
    const rowsUpdate = [...rows];
    rowsUpdate.splice(index, 1);
    setRows(rowsUpdate);
  };


  return (
  
      <div className="col-sm-4" >
        <Form>
          <br />
          <Button
            variant="dark"
            className="btn btn-outline-secondary"
            onClick={addRow}
          >
            +Add Row
          </Button>
          <br />
          <Table className="table" hover={true}>
            <thead>
              <tr>
                <th>Id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>gender</th>
                <th>ip_address</th>
              </tr>
            </thead>
            <tbody>
           {rows.map((data, index) => {
              return(
              <Row
                key={index}
                index={index}
                dataId={data.id}
                first_name={data.first_name}
                last_name={data.last_name}
                email={data.email}
                gender={data.gender}
                ip_address={data.ip_address}
                deleteRow={deleteRow}
                handleChange={handleChange}
              />)})}
            </tbody>
          </Table>
        </Form>
      </div>

  );
}
export default CustomTable;
