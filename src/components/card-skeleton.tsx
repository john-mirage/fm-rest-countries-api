function CardSkeleton() {
  return (
    <li className="mb-40 w-264 h-auto min-h-336 overflow-hidden rounded-6 shadow bg-light-surface dark:bg-dark-surface lg:mb-[75px]">
      <div className="animate-pulse">
        <div className="w-full h-160 bg-light-element dark:bg-dark-element"></div>
        <div className="p-24">
          <div className="mb-16 w-full h-24 bg-light-element dark:bg-dark-element"></div>
          <div className="mb-4 w-full h-20 bg-light-element dark:bg-dark-element"></div>
          <div className="mb-4 w-full h-20 bg-light-element dark:bg-dark-element"></div>
          <div className="w-full h-20 bg-light-element dark:bg-dark-element"></div>
        </div>
      </div>
    </li>
  );
}

export default CardSkeleton;