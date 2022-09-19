import { Form, Button } from "react-bootstrap";
import './Row.css';

function Row({ index, dataId, first_name, last_name, email, gender, ip_address, deleteRow, handleChange }) {
    return (
      <tr key={index}>
        <td>
          <Form.Control
            type="text"
            id="id"
            value={dataId}
            onChange={(e) => handleChange(index, e)}
            name="id"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Form.Control
            type="text"
            id="first_name"
            value={first_name}
            onChange={(e) => handleChange(index, e)}
            name="first_name"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Form.Control
            type="text"
            id="last_name"
            value={last_name}
            onChange={(e) => handleChange(index, e)}
            name="last_name"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Form.Control
            type="text"
            id="email"
            value={email}
            onChange={(e) => handleChange(index, e)}
            name="email"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Form.Control
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => handleChange(index, e)}
            name="gender"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Form.Control
            type="text"
            id="ip_address"
            value={ip_address}
            onChange={(e) => handleChange(index, e)}
            name="ip_address"
            className="form-control"
          />
          <Form.Text muted></Form.Text>{" "}
        </td>
        <td>
          <Button
            variant="warning"
            className="btn btn-outline-danger"
            onClick={() => deleteRow(index)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  
}
export default Row;
