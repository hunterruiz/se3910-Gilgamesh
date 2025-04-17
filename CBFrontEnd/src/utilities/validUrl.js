

function validURL(URL) {
    const URLregex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(URLregex);

    if (url.match(regex)) {
      try {
        const newURL = new URL(URL);
        return newURL.protocol === 'http:' || newURL.protocol === 'https:';
      } catch (error) {
        return false;
      }
    }
    else {

    }
  }