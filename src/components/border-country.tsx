import useBorderCountry from "@hooks/use-border-country";
import ErrorNotification from "@components/error-notification";
import Button from "@components/button";
import ButtonSkeleton from "@components/skeleton/button-skeleton";

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