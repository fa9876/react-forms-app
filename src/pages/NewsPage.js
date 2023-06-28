import { useLoaderData } from "react-router-dom";

const NewsPage = () => {
  const { id, title, body } = useLoaderData();

  return (
    <>
      <h1>This is news page: {id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};

export default NewsPage;
