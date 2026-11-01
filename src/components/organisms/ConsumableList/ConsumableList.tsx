import "./ConsumableList.scss";

import { ReactElement } from "react";

import { ConsumableList } from "@/components/molecules/ConsumableList/ConsumableList";
import { useConsumables } from "@/hooks/queries/useConsumables";
import { ConsumableCategory } from "@/types/api/ConsumableApi";

export interface ConsumableOrganismProps {
  category?: ConsumableCategory;
}

export const ConsumableOrganism = ({
  category,
}: ConsumableOrganismProps): ReactElement => {
  const { data: list = [], isLoading, error } = useConsumables(category);

  return (
    <div className="consumable-organism">
      <ConsumableList
        list={list}
        loading={isLoading}
        error={error ? error.message : null}
      />
    </div>
  );
};

export default ConsumableOrganism;
