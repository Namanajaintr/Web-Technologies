import React, { useEffect, useState } from "react";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((postdata) => {
        setPosts({ posts: postdata });
        console.log(postdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <table>
        <tr>
          <td>ID</td>
          <td>TITLE</td>
        </tr>

        {posts.map((data, index, arr) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default FetchPosts;
