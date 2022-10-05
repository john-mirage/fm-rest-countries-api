import { useRouter } from "next/router";

function Button({ borderCountry }) {
  const router = useRouter();

  function handleClick() {
    router.push(`${borderCountry.alpha3Code.toLowerCase()}`);
  }

  return (
    <button onClick={handleClick} className="mx-5 mb-10 px-16 flex min-w-96 h-28 rounded-2 shadow bg-light-surface dark:bg-dark-surface">
      <span className="m-auto text-12 font-300 text-light-text dark:text-dark-text">{borderCountry.name}</span>
    </button>
  );
}

export default Button;