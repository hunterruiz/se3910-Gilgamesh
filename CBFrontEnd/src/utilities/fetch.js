function scanUrl(url, setter) {
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

function saveUrl(url, userId) {
  fetch(`http://localhost:8080/url/save/${userId}`, {
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

function deleteUrl(urlId) {
  fetch(`http://localhost:8080/url/${urlId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(urlId),
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

export { scanUrl, saveUrl, deleteUrl };
