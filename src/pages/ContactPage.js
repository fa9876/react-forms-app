import { Form, useActionData } from "react-router-dom";
const ContactPage = () => {
  const data = useActionData();

  return (
    <div>
      {!data && (
        <Form method="post" action="/contact">
          <h1>This is contact page: </h1>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="border-4"
          ></input>
          <button className="border-2">submit</button>
        </Form>
      )}
      {data && <p className="text-green-500">Hello, {data.fullname}</p>}
    </div>
  );
};

export default ContactPage;
