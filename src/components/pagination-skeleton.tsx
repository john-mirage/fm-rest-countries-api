function PaginationSkeleton() {
  return (
    <div className="animate-pulse lg:flex lg:flex-row lg:justify-between lg:items-center">
      <div className="lg:flex-none w-200 h-16 bg-light-element dark:bg-dark-element"></div>
      <div className="space-x-16 lg:flex-none lg:flex lg:flex-row lg:justify-start lg:items-center">
        <div className="w-96 h-32 rounded-2 shadow bg-light-surface dark:bg-dark-surface"></div>
        <div className="w-96 h-32 rounded-2 shadow bg-light-surface dark:bg-dark-surface"></div>
      </div>
    </div>
  );
}

export default PaginationSkeleton;