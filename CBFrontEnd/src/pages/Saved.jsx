import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Saved() {
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/urls/${localStorage.getItem('user')}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setUrls(res);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#006847", minHeight: "100vh", padding: "2rem" }}>
      <Table striped bordered hover variant="light" className="bg-white rounded">
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
    </div>
  );
}

export default Saved;
