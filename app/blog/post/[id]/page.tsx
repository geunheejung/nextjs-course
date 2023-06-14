"use client";

import { useParams } from "next/navigation";
import postData from "../../data";

const Post = () => {
  const params = useParams() as { id: string };

  const { id } = params;

  const data = postData.find((row) => row.id === id);

  return (
    <div>
      <h1>{data?.title}</h1>
      <div>{data?.contents}</div>
    </div>
  );
};

export default Post;
