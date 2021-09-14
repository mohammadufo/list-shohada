import React from "react";

const Person = ({ fullname, deleted, changed }) => {
  return (
    <div className="card bg-dark my-4 w-25 mx-auto">
      <div className="card-header card-title text-white">
        <p>{`شهید والا مقام ${fullname}`}</p>
      </div>
      <div className="card-body">
        <div className="input-group justify-content-center">
          <div className="input-group-prepend">
            <input className="form-control w-100" type="text" placeholder={fullname} onChange={changed} />
            <button className="btn btn-sm btn-danger fa fa-minus-square" onClick={deleted}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
