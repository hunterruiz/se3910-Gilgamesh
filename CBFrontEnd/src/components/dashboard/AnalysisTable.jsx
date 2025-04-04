import Table from "react-bootstrap/Table";
import styles from "../../styles/analysis-table.module.css";
import ListGroup from "react-bootstrap/ListGroup";

// TO DO Take data from another component and pass it to this one.
// documentation on how to do this https://react.dev/learn/passing-props-to-a-component
function AnalysisTable() {
  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}
      <form method="POST" action="backend-url">
        {/* TO DO send data to backend. */}
      </form>
      <div>
        <h2>URL:</h2>
        <h3>www.google.com</h3>
      </div>

      <div>
        <h6>Last Scanned: </h6>
        <p>11/20/2025</p>
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
            <td>code</td>
            <td>date</td>
            <td>https</td>
            <td>200</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>

      <h2>Headers</h2>
      {/* TO DO make overflow hidden */}
      <ListGroup>
        <ListGroup.Item>cache-control: "no-chache"</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AnalysisTable;
