function CardSkeleton() {
  return (
    <li className="mb-40 w-264 h-auto overflow-hidden rounded-6 bg-light-surface dark:bg-dark-surface">
      <div className="animate-pulse">
        <div className="mb-24 w-full h-160 bg-light-element dark:bg-dark-element"></div>
        <div className="px-24 pt-24 pb-40">
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