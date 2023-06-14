import Link from "next/link";
import postData from "./data";

const Posts = () => {
  return (
    <div>
      {postData.map((row) => (
        <Link href={`/blog/post/${row.id}`} key={row.id}>
          <div key={row.id}>
            <div>{row.title}</div>
            <div>{row.contents.slice(0, 10)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <Posts />
    </div>
  );
};

export default Blog;
