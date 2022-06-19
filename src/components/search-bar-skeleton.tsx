function SearchBarSkeleton() {
  return (
    <div className="mb-40 w-full h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface">
      <div className="animate-pulse flex flex-row justify-start items-center px-32 w-full h-full">
        <div className="mr-24 w-16 h-16 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="w-[116px] h-16 bg-light-element dark:bg-dark-element"></div>
      </div>
    </div>
  );
}

export default SearchBarSkeleton;