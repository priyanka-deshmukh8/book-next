import React from "react";
import { BookButton } from "./Clients";

export const BookItem = ({ title, description, id, completed }) => {
  return (
    <div className="Book">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div>
        <BookButton id={id} completed={completed} />
      </div>
    </div>
  );
};
