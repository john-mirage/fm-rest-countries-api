import useBorderCountry from "@hooks/use-border-country";
import { ErrorNotification } from "@components/ErrorNotification";
import { Button, ButtonSkeleton } from "@components/Button";
import { FunctionComponent } from "react";

interface Props {
  borderCountryCode: string;
}

const BorderCountry: FunctionComponent<Props> = ({ borderCountryCode }) => {
  const { borderCountry, isLoading, isError } = useBorderCountry(borderCountryCode as string);

  return (
    <>
      {isLoading ? (
        <ButtonSkeleton />
      ) : isError ? (
        <ErrorNotification message="The border country has not been found." />
      ) : (
        <Button borderCountry={borderCountry} />
      )}
    </>
  );
}

export default BorderCountry;