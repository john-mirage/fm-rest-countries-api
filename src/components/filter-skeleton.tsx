function FilterSkeleton() {
  return (
    <div className="w-200 h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface">
      <div className="animate-pulse flex flex-row justify-between items-center px-24 w-full h-full">
        <div className="w-[85px] h-16 bg-light-element dark:bg-dark-element"></div>
        <div className="w-16 h-16 bg-light-element dark:bg-dark-element"></div>
      </div>
    </div>
  );
}

export default FilterSkeleton;