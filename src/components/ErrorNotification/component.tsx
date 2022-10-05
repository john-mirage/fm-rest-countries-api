import { FunctionComponent } from "react";

interface Props {
  message: string;
}

const ErrorNotification: FunctionComponent<Props> = ({ message }) => {
  return (
    <h2 className="mx-auto text-24 font-600 text-light-text sm:text-32 dark:text-dark-text">{message}</h2>
  );
}

export default ErrorNotification;