import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
    // console.log(bodyInputRef.current.value);
  };

  return (
    <form>
      {/* controlled component */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      ></MyInput>
      {/* uncontrolled component using ref*/}
      <MyInput
        // ref={bodyInputRef}
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      ></MyInput>
      <MyButton onClick={addNewPost} type="submit">
        Add post
      </MyButton>
    </form>
  );
};

export default PostForm;
