import { range } from "lodash";
import CardSkeleton from "@components/card-skeleton";

function CardGroupSkeleton() {
  return (
    <ul className="flex flex-row flex-wrap justify-around">
      {range(20).map((index) => (
          <CardSkeleton key={index} />
      ))}
    </ul>
  );
}

export default CardGroupSkeleton;