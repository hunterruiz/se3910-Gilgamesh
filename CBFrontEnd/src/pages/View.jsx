import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AnalysisTableNoSave } from "../components/dashboard/AnalysisTable";
import { scanUrl, saveUrl, deleteUrl } from "../utilities/fetch";
import Button from "react-bootstrap/Button";

function View() {
  const location = useLocation();
  const navigate = useNavigate();

  const [url, setUrl] = useState({
    urlId: location.state.urlId,
    url: location.state.url,
    name: location.state.name,
  });

  const [httpsRes, setHttpsRes] = useState({
    url: url.url,
    certificate: {},
    status: null,
    headers: {},
    protocol: null,
  });

  function routeToSaved(res) {
    if (res !== null) {
      navigate("/saved");
    } else {
      alert("fails");
    }
  }

  return (
    <>
      <div>
        {" "}
        <Button
          onClick={() => {
            const res = saveUrl(url);
            routeToSaved(res);
          }}
          variant="success">
          Update
        </Button>
        <Button
          onClick={() => {
            scanUrl(url, setHttpsRes);
          }}
          variant="success">
          Rescan
        </Button>
        <Button
          onClick={() => {
            const res = deleteUrl(url.urlId);
            routeToSaved(res);
          }}
          variant="danger">
          Delete
        </Button>
      </div>
      <div>
        <label htmlFor="url-name">Name</label>
        <input
          id="url-name"
          value={url.name}
          onChange={(e) => setUrl({ ...url, name: e.target.value })}></input>
      </div>
      <AnalysisTableNoSave httpsRes={httpsRes} />
    </>
  );
}

export default View;
