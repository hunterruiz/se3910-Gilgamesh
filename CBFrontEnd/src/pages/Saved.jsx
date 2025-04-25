import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Saved() {
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/urls", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setUrls(res);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr
            onClick={() => {
              navigate("/saved/view/" + url.urlId, {
                state: { name: url.name, url: url.url, urlId: url.urlId },
              });
            }}
            key={url.urlId}>
            <td>{url.urlId}</td>
            <td>{url.name}</td>
            <td>{url.url}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Saved;
