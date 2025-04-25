import { AnalysisTable } from "../components/dashboard/AnalysisTable";
import { useState } from "react";
import { scanUrl } from "../utilities/fetch";

// can use this free api for testing https://jsonplaceholder.typicode.com/todos
// place url into URL search on browser
// free header inspection tool https://securityheaders.com/
function Dashboard() {
  // use state to hold state of the url
  const [url, setUrl] = useState({
    url: "",
    name: "",
  });

  const [httpsRes, setHttpsRes] = useState({
    url: "",
    certificate: {},
    status: null,
    headers: {},
    protocol: null,
  });

  function submitUrl(event) {
    event.preventDefault();
    scanUrl(url, setHttpsRes);
  }

  return (
    <>
      <div>
        <form onSubmit={submitUrl}>
          <label htmlFor="url-search">URL Search</label>
          <input
            id="url-search"
            placeholder="commercebank.com"
            onChange={(e) => setUrl({ ...url, url: e.target.value })}></input>

          <button type="submit">Fetch</button>
        </form>

        <AnalysisTable httpsRes={httpsRes} />
      </div>
    </>
  );
}

export default Dashboard;
