import AnalysisTable from "../components/dashboard/AnalysisTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    certificates: {},
    status: null,
    headers: {},
    protocol: null,
  });

  function submitUrl(event) {
    event.preventDefault();

    try {
      isValidURL(url.url);

      fetch("http://localhost:8080/url/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(url),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.error);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Raw data\n");
          console.log(data);
          setHttpsRes({
            url: data.url,
            // sll certificates won`t appear in response
            certificates: {},
            status: data.statusCode,
            headers: {},
            // TO DO figure out how to get protocol
            protocol: data.protocol,
          });
          console.log("httpReq state\n");
          console.log(httpsReq);
          console.log(data);
        });
    } catch (error) {
      throw new Error("Error submitting URL:", error);
    }
  }

  function isValidURL(URL) {
    try {
      const newURL = new URL(URL);
      return newURL.protocol === "http:" || newURL.protocol === "https:";
    } catch (error) {
      return new Error("URL not valid");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={submitUrl}>
          <label htmlFor="url-search">URL Search</label>
          <input
            autoComplete="off"
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
