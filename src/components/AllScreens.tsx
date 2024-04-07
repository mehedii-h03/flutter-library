import { Link } from "react-router-dom";

// TODO: Active link, Mores link have to add

const AllScreens = () => {
  return (
    <div>
      <h5 className="px-2 mt-7 text-sm">All screens</h5>
      <ul className="py-4 text-sm">
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            Sing in
            <span>10</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AllScreens;
