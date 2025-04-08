import AnalysisTable from "../components/dashboard/AnalysisTable";
import { useState } from "react";

// can use this free api for testing https://jsonplaceholder.typicode.com/todos
// place url into URL search on browser
// free header inspection tool https://securityheaders.com/
function Dashboard() {
  // use state to hold state of the url
  const [url, setUrl] = useState("");
  const [httpsReq, setHttpsReq] = useState({
    url: "",
    certificates: {},
    status: null,
    headers: {},
    protocol: null,
  });

  // TO DO need to fix CORS error
  // runs after clicking Fetch button in browser
  // might need to hit fetch twice because it only outputs the current
  // response the second time
  function useFetch(event) {
    event.preventDefault();
    // TO DO add url validation
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response;
      })
      .then((data) => {
        console.log("Raw data\n");
        console.log(data);
        setHttpsReq({
          url: data.url,
          // sll certificates won`t appear in response
          certificates: {},
          status: data.status,
          headers: Object.fromEntries(data.headers.entries()),
          // TO DO figure out how to get protocol
          protocol: null,
        });
        console.log("httpReq state\n");
        // do fn-f12 or f12 to see this response in the browser
        // this opens the console cmd in browser.
        // click on console and the messages
        console.log(httpsReq);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  return (
    // html elements that are returned in the browser
    <>
      <div>
        {/* onSumbit runs the useFetch. useFetch is at the top of this file */}
        <form onSubmit={useFetch}>
          <label htmlFor="url-search">URL Search</label>
          <input
            autoComplete="off"
            id="url-search"
            placeholder="commercebank.com"
            onChange={(e) => setUrl(e.target.value)}></input>

          <button type="submit">Fetch</button>
        </form>

        <AnalysisTable httpsReq={httpsReq} />
      </div>
    </>
  );
}

export default Dashboard;
