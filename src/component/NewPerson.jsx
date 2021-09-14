import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";

const NewPerson = () => {
  const context = useContext(SimpleContext);
  const {person} = context;

  return (
    <div>
      <div className="m-2 p-2">
        <form
          className="form-inline justify-content-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="input-group w-25">
            <input
              type="text"
              placeholder="اسم مبارک یه شهید بهم بده"
              className="form-control"
              onChange={context.setPerson}
              value={person}
            />
            <div className="input-group-prepend">
              <button
                type="submit"
                className="btn btn-sm btn-success fa fa-plus-square"
                onClick={context.handleNewPerson}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPerson;
