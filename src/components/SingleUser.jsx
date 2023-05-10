import { Link } from "react-router-dom";

const SingleUser = ({user, handleDelete}) => {
  const {_id, name, email} = user;

  return (
    <div className="w-3/4 mx-auto flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <p className="text-2xl font-semibold text-secondary">{name} : {email} : {_id}</p>
          <div className="flex justify-center">
            <Link to={`/update/${_id}`}>
              <button className="btn btn-secondary mr-4 capitalize">Update</button>
            </Link>
            <button onClick={ () => handleDelete(_id)} className="btn btn-square btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;