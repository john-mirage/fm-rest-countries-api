import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

function BackButton({ onClick }) {
  return (
    <button onClick={onClick} className="flex flex-row items-center w-auto h-32 px-24 rounded-2 shadow bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text">
      <ArrowNarrowLeftIcon className="w-18 h-18 mr-8"/>
      <span className="text-14 font-300">Back</span>
    </button>
  );
}

export default BackButton;