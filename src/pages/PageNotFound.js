import { Link } from "react-router-dom";
import pageNotFound from "../assets/pageNotFound.jpg";
import { Button } from "../components";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex justify-center flex-col mx-4">
        <div className="flex justify-center flex-col items-center font-medium text-slate-700 dark:text-white my-10">
          <p className="text-3xl">404, Oops!</p>
          <p className="text-2xl">Sorry Page Not Found</p>
          <img className="mt-4" src={pageNotFound} alt="page not found image" />
        </div>
        <div className="flex justify-center ">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
