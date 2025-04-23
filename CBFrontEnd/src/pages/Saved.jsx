import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function Saved() {
  const [urls, setUrls] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:8080/urls", {method:"GET"})
      .then(res =>res.json())
      .then(res=>{
          setUrls(res)});
  },[])

  return (
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>#</th>
        <th>Url Name</th>
        <th>Url</th>
        </tr>
    </thead>
    <tbody>

    {urls.map(url =>

        <tr key = {url.url_id}>
        <td>{url.url_id}</td>
        <td>{url.name}</td>
        <td>{url.url}</td>
        </tr>
        )}

    </tbody>
    </Table> 
  );
}

export default Saved;
