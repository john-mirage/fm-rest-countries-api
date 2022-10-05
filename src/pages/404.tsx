import { FunctionComponent } from "react";

const Custom404: FunctionComponent = () => {
  return (
    <div className="mx-auto pt-80 text-center sm:flex sm:flex-row sm:justify-center sm:items-start sm:divide-x-2 sm:divide-light-input sm:text-left dark:sm:divide-dark-element">
      <p className="mb-8 text-32 font-600 text-light-text dark:text-dark-text sm:mb-0 sm:pr-16">404</p>
      <div className="sm:pl-16">
        <h2 className="mb-8 text-24 font-600 text-light-text dark:text-dark-text sm:text-32">Page not found</h2>
        <p className="text-16 font-300 text-light-text opacity-75 dark:text-dark-text">Please check the URL in the address bar and try again.</p>
      </div>
    </div>
  );
}

export default Custom404;