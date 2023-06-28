import { useLoaderData, NavLink } from "react-router-dom";
const NewsTitlePage = () => {
  const { data } = useLoaderData();

  return (
    <>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <NavLink
                to={`/news/${post.id}`}
                className={({ isActive, isPending }) =>
                  `${isPending ? "bg-yellow-200" : ""}`
                }
              >
                {post.title}
                <br />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsTitlePage;
