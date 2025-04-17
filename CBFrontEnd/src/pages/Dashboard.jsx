import AnalysisTable from "../components/dashboard/AnalysisTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// can use this free api for testing https://jsonplaceholder.typicode.com/todos
// place url into URL search on browser
// free header inspection tool https://securityheaders.com/
function Dashboard() {
  // use state to hold state of the url
  const [url, setUrl] = useState({
    name:'',
    url:'',
  });

  const [httpsReq, setHttpsReq] = useState({
    url: '',
    certificates: {},
    status: null,
    headers: {},
    protocol: null,
  });

  const changeValue=(e)=>{
    console.log(e);
    setUrl({
      ...url, [e.target.name]:e.target.value
    });
    console.log(e.target.name + "name");
    console.log(e.target.value + "value");
  }

  const navigate = useNavigate();

  const submitUrl =(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/url", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(url)
    })
    .then(res=>{
      console.log(1, res);
      if(res.status === 201){
        return res.json();
      }
      else{
        return null;
      }
    })
    .then(res=>{
      console.log(res)
      if(res!=null){
        navigate("/urls");;
      }
      else{
        alert('fails');
      }
    });
  }

  // TO DO need to fix CORS error
  // runs after clicking Fetch button in browser
  // might need to hit fetch twice because it only outputs the current
  // response the second time
  function useFetch(event) {
    event.preventDefault();
    // TO DO add url validation
    console.log(validURL(url));

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

  function validURL(URL) {
    try {
      const newURL = new URL(URL);
      return newURL.protocol === 'http:' || newURL.protocol === 'https:';
    } catch (error) {
      return false;
    }
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
