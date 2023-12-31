import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-950">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            CineMentry™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/Dey11subrata"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/subrata-dey-4653881a4/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:deysubrata2311@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Email
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
