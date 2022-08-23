// fetch()
// fetch the data from the apis
// fetch method takes url as a first argument
// second agr are http methods

let url = "https://jsonplaceholder.typicode.com/todos";
const fetchPosts = () => {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json(); //returns in an array
    })
    .then((data) => {
      console.log(data);
      let postData = "<ul>"; //or<h1>
      data.map((posts, index, arr) => {
        postData += `<li>${posts.title}</li>`;
        console.log(postData);
      });
      postData += "</ul>";
      const divElement = document.getElementById("users");
      divElement.innerHTML = postData;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchPosts();
