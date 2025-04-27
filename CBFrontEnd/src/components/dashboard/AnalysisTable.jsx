import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import styles from "../../styles/analysis-table.module.css";
import { useNavigate } from "react-router-dom";

import JSONList from "./JSONList";
import { saveUrl } from "../../utilities/fetch";

function AnalysisTable({ httpsRes }) {
  // Made to hold URL and name for saving, may not be necessary
  const [url, setUrl] = useState({
    name: "",
    url: "",
  });

  // Sets the variables for URL and name, borrowing the URL from httpsRes
  const changeValue = (e) => {
    console.log(e);
    setUrl({
      url: httpsRes.url,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + "name");
  };

  // For navigating to the Saved page on submit
  const navigate = useNavigate();

  // Sending the URL data to the backend
  const sendUrl = (e) => {
    e.preventDefault();
    const res = saveUrl(url, localStorage.getItem('user'));

    if (res !== null) {
      navigate("/saved");
    } else {
      alert("fails");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}

      <div>
        <h2>URL: {httpsRes.url}</h2>

        <div>
          <Form onSubmit={sendUrl}>
            <Form.Group>
              <Form.Label>Url Name:</Form.Label>
              {/* Calls changeValue to update the url name */}
              <Form.Control
                type="text"
                placeholder="Enter Url name"
                onChange={changeValue}
                name="name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <button type="submit">Save</button>
          </Form>

          <h6>Last Scanned: {httpsRes.headers.date}</h6>
        </div>
      </div>

      <JSONList title={"SSL Certificate"} json={httpsRes.certificate} />

      <Table name="sll-certificate" striped bordered hover>
        <thead>
          <tr>
            <th>Expiration</th>
            <th>Protocol</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {httpsRes.certificate.validTo}</td>
            <td>{httpsRes.protocol}</td>
            <td>{httpsRes.status}</td>
          </tr>
        </tbody>
      </Table>

      <JSONList title={"Headers"} json={httpsRes.headers} />
    </div>
  );
}

function AnalysisTableNoSave({ httpsRes }) {
  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}

      <div>
        <h2>URL: {httpsRes.url}</h2>

        <div>
          <h6>Last Scanned: {httpsRes.headers.date}</h6>
        </div>
      </div>

      <JSONList title={"SSL Certificate"} json={httpsRes.certificate} />

      <Table name="sll-certificate" striped bordered hover>
        <thead>
          <tr>
            <th>Expiration</th>
            <th>Protocol</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{httpsRes.certificate.validTo}</td>
            <td>{httpsRes.protocol}</td>
            <td>{httpsRes.status}</td>
          </tr>
        </tbody>
      </Table>

      <JSONList title={"Headers"} json={httpsRes.headers} />
    </div>
  );
}

export { AnalysisTable, AnalysisTableNoSave };
