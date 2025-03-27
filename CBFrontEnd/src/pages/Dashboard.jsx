import { useState } from "react";
import { useEffect } from "react";

function Dashboard() {
  // GET statement that retrieves the html file for the URL imputed
  function useFetch(event) {
    event.preventDefault();

    // TO DO gets url but returns the HTML file
    fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error: ", error));
  }

  // use state to hold state of the url
  const [url, setUrl] = useState("");

  return (
    // html elements that are returned in the browser
    <>
      <div>
        <form onSubmit={useFetch}>
          <label htmlFor="url-search">Url Search</label>
          <input
            autocomplete="off"
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
