import { FunctionComponent } from "react";

const FilterSkeleton: FunctionComponent = () => {
  return (
    <div className="w-200 h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface">
      <div className="animate-pulse flex flex-row justify-between items-center px-24 w-full h-full">
        <div className="w-[85px] h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="w-12 h-12 rounded-full bg-light-element dark:bg-dark-element"></div>
      </div>
    </div>
  );
}

export default FilterSkeleton;