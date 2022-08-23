let url = "https://jsonplaceholder.typicode.com/todos";

let fetchfunc = () => {
  fetch(url)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      let details = "<div>";
      data.map((value, ind, arr) => {
        details += `<img src="${value.url}"/>`;
      });
      details += "</div>";
      console.log(details);
      const divElement = document.getElementById("users");
      divElement.innerHTML = postData;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchfunc();
