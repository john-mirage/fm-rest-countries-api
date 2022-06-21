function ButtonSkeleton() {
  return (
    <div className="mx-5 mb-10 flex w-96 h-28 rounded-2 shadow bg-light-surface dark:bg-dark-surface">
      <div className="animate-pulse m-auto w-56 h-12 rounded-full bg-light-element dark:bg-dark-element"></div>
    </div>
  );
}

export default ButtonSkeleton;