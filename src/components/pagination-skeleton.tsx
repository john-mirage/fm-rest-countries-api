function PaginationSkeleton() {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
      <div className="animate-pulse mb-16 lg:mb-0 lg:flex-none w-200 h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
      <div className="space-x-16 flex flex-row justify-start items-center lg:flex-none">
        <div className="flex w-96 h-40 rounded-2 shadow bg-light-surface dark:bg-dark-surface">
          <div className="animate-pulse m-auto w-56 h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
        </div>
        <div className="flex w-96 h-40 rounded-2 shadow bg-light-surface dark:bg-dark-surface">
          <div className="animate-pulse m-auto w-56 h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
        </div>
      </div>
    </div>
  );
}

export default PaginationSkeleton;