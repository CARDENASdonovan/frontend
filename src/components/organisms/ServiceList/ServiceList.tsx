import {
  CardList,
  CardListProps,
} from "@/components/molecules/CardList/CardList";
import { ReactElement } from "react";
import "./ServiceList.scss";

export const ServiceList = (): ReactElement => {
  const services: CardListProps["list"] = [
    {
      name: "Service 1",
      description:
        "In React Native, use the numberOfLines and ellipsizeMode props on the <Text> component to truncate text with an ellipsis.  The numberOfLines prop limits the visible lines, while ellipsizeMode determines where the dots appear ('tail' for end, 'head' for start, or 'middle').",
      url: "/dictionary",
    },
  ];

  return (
    <div className={`card-list`}>
      <CardList list={services}></CardList>
    </div>
  );
};
