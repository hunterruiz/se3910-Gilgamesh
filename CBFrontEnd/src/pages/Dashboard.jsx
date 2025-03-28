import { useState } from "react";
import { useEffect } from "react";

// can use this free api for testing https://jsonplaceholder.typicode.com/todos
// place url into URL search on browser
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
          // TO DO figure out how to get certificate
          certificates: {},
          status: data.status,
          headers: data.headers,
          // TO DO figure out how to get protocol
          protocol: null,
        });
        console.log("httpReq state\n");
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
        <form onSubmit={useFetch}>
          <label htmlFor="url-search">URL Search</label>
          <input
            autoComplete="off"
            id="url-search"
            placeholder="commercebank.com"
            onChange={(e) => setUrl(e.target.value)}></input>
          <button type="submit">Fetch</button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
