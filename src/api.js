export const baseUrl = "https://api.tvmaze.com";

export function fetchData(url) {
  return fetch(url)
    .then(response => {
      return response.json().then(data => {
        if (response.ok) {
          return data;
        } else {
          return Promise.reject({ status: response.status, data });
        }
      });
    })
    .catch(error => console.log("error:", error));
}

export function fetchShowByName(showName) {
  return fetchData(`${baseUrl}/search/shows?q=${showName}`);
}

export function fetchShowById(showId) {
  return fetchData(`${baseUrl}/shows/${showId}`);
}
