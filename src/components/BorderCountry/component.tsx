import useBorderCountry from "@hooks/use-border-country";
import { ErrorNotification } from "@components/ErrorNotification";
import { Button, ButtonSkeleton } from "@components/Button";

function BorderCountry({ borderCountryCode }) {
  const { borderCountry, isLoading, isError } = useBorderCountry(borderCountryCode as string);

  return (
    <>
      {isLoading ? (
        <ButtonSkeleton />
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <Button borderCountry={borderCountry} />
      )}
    </>
  );
}

export default BorderCountry;