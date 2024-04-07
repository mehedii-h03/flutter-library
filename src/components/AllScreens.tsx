import { Link } from "react-router-dom";

// TODO: Active link, Mores link have to add

const AllScreens = () => {
  return (
    <div>
      <h5 className="px-2 mt-7 text-sm">All screens</h5>
      <ul className="py-4 text-sm space-y-2">
        <li>
          <Link to="" className="text-sm flex justify-between text-TSecondary px-4">
            Sign in
            <span>10</span>
          </Link>
        </li>
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            Chat
            <span>5</span>
          </Link>
        </li>
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            Onboarding
            <span>18</span>
          </Link>
        </li>
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            E-commerce
            <span>9</span>
          </Link>
        </li>
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            Checkout
            <span>10</span>
          </Link>
        </li>
        <li>
          <Link to="" className="flex justify-between text-TSecondary px-4">
            Error
            <span>16</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AllScreens;
