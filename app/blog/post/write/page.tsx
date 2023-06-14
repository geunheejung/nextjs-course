// 새 글 작성
const PostWrite = () => {
  return (
    <div>
      <label htmlFor="title">제목</label>
      <input type="text" />
      <label htmlFor="tag">tag</label>
      <input type="text" />
      <textarea name="content" id="post-content" cols={30} rows={10}></textarea>
    </div>
  );
};

export default PostWrite;
