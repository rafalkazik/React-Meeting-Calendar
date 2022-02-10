const url = `http://localhost:3005/meetings/`;

export function postData(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(url, options).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }

    throw new Error("Network error!");
  });
}

export function deleteData(targetTaskElementID) {
  const options = {
    method: "DELETE",
  };

  fetch(`${url}${targetTaskElementID}`, options).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }

    throw new Error("Network error!");
  });
}
