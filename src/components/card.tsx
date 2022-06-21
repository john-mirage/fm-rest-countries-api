function Card({ country }) {
  return (
    <div className="w-264 h-auto min-h-336 overflow-hidden rounded-6 shadow bg-light-surface dark:bg-dark-surface">
      <img draggable="false" className="w-full h-160 object-cover object-center" src={country.flags.png} />
      <div className="p-24 pt-28">
        <div className="mb-20 w-full h-18 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="mb-10 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="mb-10 w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
        <div className="w-full h-14 rounded-full bg-light-element dark:bg-dark-element"></div>
      </div>
    </div>
  );
}

export default Card;