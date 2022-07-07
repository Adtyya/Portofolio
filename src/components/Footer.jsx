import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer bg-transparent dark:bg-slate-800 rounded-t-md">
      <div className="flex flex-row space-x-3">
        <a
          href="https://web.facebook.com/profile.php?id=100025324964954"
          target="_blank"
          rel="noreferrer"
          className="text-dark dark:text-slate-300"
        >
          <RiFacebookCircleFill className="text-2xl" />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100025324964954"
          target="_blank"
          rel="noreferrer"
          className="text-dark dark:text-slate-300"
        >
          <RiGithubLine className="text-2xl" />
        </a>
      </div>
      <h5 className="heading-5 text-sm mt-4">&copy; 2022 - cuyDev</h5>
    </div>
  );
}

export default Footer;
