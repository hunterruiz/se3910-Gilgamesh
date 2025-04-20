import Table from "react-bootstrap/Table";
import styles from "../../styles/analysis-table.module.css";

import JSONList from "./JSONList";

function AnalysisTable({ httpsRes }) {
  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}

      <div>
        <h2>URL: {httpsRes.url}</h2>

        <div>
          <form method="POST" action="http://localhost:8080/url/save">
            {/* TO DO send data to backend. */}
            <button type="submit">Save</button>
          </form>

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

export default AnalysisTable;
