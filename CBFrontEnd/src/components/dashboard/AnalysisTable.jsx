import Table from "react-bootstrap/Table";
import styles from "../../styles/analysis-table.module.css";
import ListGroup from "react-bootstrap/ListGroup";

function AnalysisTable({ httpsRes }) {
  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}

      <div>
        <h2>URL: {httpsRes.url}</h2>

        <div>
          <form method="POST" action="backend-url">
            {/* TO DO send data to backend. */}
            <button type="submit">Save</button>
          </form>

          <h6>Last Scanned: {httpsRes.headers.date}</h6>
        </div>
      </div>

      <Table name="sll-certificate" striped bordered hover>
        <thead>
          <tr>
            <th>SSL Certificate</th>
            <th>Expiration</th>
            <th>Protocol</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{httpsRes.certificate}</td>
            <td> {/* Expiration */}</td>
            <td>{httpsRes.protocol}</td>
            <td>{httpsRes.status}</td>
          </tr>
        </tbody>
      </Table>

      <h2>Headers</h2>
      <ListGroup className={styles.listGroup}>
        {/* divides the object up into an array and outputs them with key : value in
        a new ListGroup.Item which is generated every time for each key value in httpsRes */}
        {Object.keys(httpsRes.headers).map(function (key) {
          return (
            <ListGroup.Item key={key}>
              {key + " : " + httpsRes.headers[key]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default AnalysisTable;
