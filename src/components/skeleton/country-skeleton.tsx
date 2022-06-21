function CountrySkeleton() {
  return (
    <div className="pt-64 lg:flex lg:flex-row lg:justify-start lg:items-center">
      <div className="animate-pulse mb-48 w-full h-230 bg-light-element dark:bg-dark-element lg:mb-0 lg:flex-none lg:mr-80 lg:w-560 lg:h-400"></div>
      <div className="lg:flex-1 lg:ml-40">
        <div className="animate-pulse mb-28 w-full h-22 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="animate-pulse lg:flex lg:flex-row lg:items-start">
          <div className="mb-48 lg:flex-1 lg:mr-16">
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
          </div>
          <div className="lg:flex-1 lg:ml-16">
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="mb-18 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
            <div className="mb-44 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
          </div>
        </div>
        <div className="animate-pulse lg:flex lg:flex-row lg:justify-start lg:items-center">
          <div className="mb-20 w-full h-16 rounded-full bg-light-element dark:bg-dark-element lg:mb-0 lg:flex-none lg:mr-16 lg:w-128"></div>
          <div className="flex flex-row flex-wrap justify-start items-center w-full h-28 bg-light-element dark:bg-dark-element lg:flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default CountrySkeleton;