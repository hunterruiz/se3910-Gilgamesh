import Table from "react-bootstrap/Table";

// TO DO Take data from another component and pass it to this one.
// documentation on how to do this https://react.dev/learn/passing-props-to-a-component
function AnalysisTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>URL</th>
          <th>Last Scanned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Google Home page</td>
          <td>https://www.google.com/</td>
          <td>3/27/2025</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Facebook Home page</td>
          <td>https://www.facebook.com/</td>
          <td>3/12/2025</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AnalysisTable;
