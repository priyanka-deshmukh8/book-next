import React, { Suspense } from "react";

const Form = React.lazy(() => import("./addBookForm"));
const Books = React.lazy(() => import("./Books"));

const Page = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>loading...</div>}>
        <Form />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Books />
      </Suspense>
    </div>
  );
};

export default Page;
