import Table from "react-bootstrap/Table";
import styles from "../../styles/analysis-table.module.css";

// TO DO Take data from another component and pass it to this one.
// documentation on how to do this https://react.dev/learn/passing-props-to-a-component
function AnalysisTable() {
  return (
    <div className={styles.wrapper}>
      {/* TO DO add backend url to action */}
      <form method="POST" action="backend-url">
        <div>
          <label htmlFor="url">URL:</label>
          <input name="url" value="www.google.com" />

          <button className={styles.saveButton} type="submit">
            SAVE
          </button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Last Scanned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Home page</td>
              <td>https://www.google.com/</td>
              <td>3/27/2025</td>
            </tr>
          </tbody>
        </Table>
      </form>
    </div>
  );
}

export default AnalysisTable;
