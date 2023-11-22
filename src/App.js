import React, { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "OOP" },
    { id: 2, title: "Python", body: "full stack" },
    { id: 3, title: "PHP", body: "deprecated" },
  ]);
  const [selectedSort, SetSelectedSort] = useState("");

  // const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    SetSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting by"
          options={[
            { value: "title", name: "By title" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={deletePost} posts={posts} title="JS Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}

      {/* <Counter />
      <ClassCounter /> */}
    </div>
  );
}

export default App;
