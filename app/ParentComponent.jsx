// ParentComponent.jsx
import React from "react";
import { ContextProvider } from "../components/Clients";


const ParentComponent = () => {
  return (
    <ContextProvider>
      <addBookForm />
    </ContextProvider>
  );
};

export default ParentComponent;
