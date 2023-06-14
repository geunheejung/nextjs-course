import Link from "next/link";

const PostLayout = (props: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const {
    children,
    params: { id },
  } = props;

  return (
    <div>
      <Link href={`/blog/post/${id}/write`}>글 수정</Link>
      {children}
    </div>
  );
};

export default PostLayout;
