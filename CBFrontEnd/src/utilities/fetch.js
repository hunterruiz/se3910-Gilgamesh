function isValidURL(inputURL) {
  //checks url w/ URL object
  try {
    const testUrl = new URL(
      inputURL.startsWith("http") ? inputURL : "https://" + inputURL
    );
    return testUrl.protocol === "http:" || testUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

function scanUrl(url, setter) {
  if (!isValidURL(url.url)) {
    alert("This URL is not valid.");
    return;
  }

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
      return res.json().catch((jsonError) => {
        alert("This URL is not valid.");
        throw jsonError;
      });
    })
    .then((data) => {
      setter({
        url: data.url,
        // sll certificates won`t appear in response
        certificate: data.certificate,
        status: data.statusCode,
        headers: data.headers,
        // TO DO figure out how to get protocol
        protocol: data.protocol,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveUrl(url) {
  fetch("http://localhost:8080/url/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  })
    .then((res) => {
      console.log(1, res);
      if (res.status === 201) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((res) => {
      return res;
    });
}

function deleteUrl(urlId) {}

export { scanUrl, saveUrl, deleteUrl };
