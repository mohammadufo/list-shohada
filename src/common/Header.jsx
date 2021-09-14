import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import SimpleContext from "../context/SimpleContext";

const Header = ({appTitle}) => {
  const context = useContext(SimpleContext);

  const personLength = context.persons.length;

  let badged = [];
  if (personLength >= 3) badged.push("badge-success");
  if (personLength <= 2) badged.push("badge-warning");
  if (personLength <= 1) badged.push("badge-danger");
  if (personLength == 0) badged.push("badge-dark");

  return (
    <div>
      <Alert variant="info mb-0">
        <h2>{appTitle}</h2>
      </Alert>
      <h5 className="alert alert-dark">
        تعداد شهدا{" "}
        <span className={`badge badge-pill ${badged.join(" ")}`}>
          {personLength}
        </span>{" "}
        نفر می باشد
      </h5>
    </div>
  );
};

export default Header;
