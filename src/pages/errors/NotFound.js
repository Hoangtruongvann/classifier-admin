import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center  bg-white w-full mt-[10%]">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-yellow-100 p-4">
            <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
              <svg
                className="w-16 h-16"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
            404 - Page not found
          </h1>
          <p className="text-slate-600 mt-5 lg:text-lg">
            {"The page you are looking for doesn't exist or"} <br />
            has been removed.
          </p>
        </div>
      </div>
      <div className="block flex justify-center">
        <div
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 "
        >
          <i className="fa-solid fa-arrow-left-long mr-2"></i> Back
        </div>
      </div>
    </>
  );
};
export default NotFound;