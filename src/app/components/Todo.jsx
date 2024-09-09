"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    setPosts(posts);
  }, []);

  return <div>hhh</div>;
}
