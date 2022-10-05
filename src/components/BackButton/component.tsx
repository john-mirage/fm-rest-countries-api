import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }
  
  return (
    <button onClick={handleClick} className="mt-40 mb-64 flex flex-row items-center w-auto h-32 px-24 rounded-2 shadow bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text md:my-80 md:pl-32 md:pr-36 md:h-40">
      <ArrowNarrowLeftIcon className="w-18 h-18 mr-8"/>
      <span className="text-14 font-300">Back</span>
    </button>
  );
}

export default BackButton;