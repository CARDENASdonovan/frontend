import "./ConsumablesPage.scss";

import { ReactElement, useState } from "react";

import { ConsumableList } from "@/components/molecules/ConsumableList/ConsumableList";
import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";
import {
  useConsumables,
  useDeleteConsumable,
} from "@/hooks/queries/useConsumables";
import { ConsumableCategory } from "@/types/api/ConsumableApi";

export const ConsumablesPage = (): ReactElement => {
  const [selectedCategory, setSelectedCategory] = useState<
    ConsumableCategory | "all"
  >("all");

  const {
    data: consumables = [],
    isLoading,
    error,
  } = useConsumables(selectedCategory);

  const { mutate: deleteConsumable } = useDeleteConsumable();

  const handleDelete = (id: string) => {
    deleteConsumable(id, {
      onError: (err) => {
        alert(`Failed to delete item: ${err.message}`);
      },
    });
  };

  return (
    <VerticalPageLayout>
      <div className="consumables-page">
        <header className="page-header">
          <h1>Consumables Inventory</h1>
          <p>Browse and manage backend consumable items</p>
        </header>

        <div className="filters-bar">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === ConsumableCategory.FOOD ? "active" : ""}`}
            onClick={() => setSelectedCategory(ConsumableCategory.FOOD)}
          >
            Food
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === ConsumableCategory.BEVERAGE ? "active" : ""}`}
            onClick={() => setSelectedCategory(ConsumableCategory.BEVERAGE)}
          >
            Beverage
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === ConsumableCategory.OTHER ? "active" : ""}`}
            onClick={() => setSelectedCategory(ConsumableCategory.OTHER)}
          >
            Other
          </button>
        </div>

        <main>
          <ConsumableList
            list={consumables}
            loading={isLoading}
            error={error ? error.message : null}
            onDelete={handleDelete}
          />
        </main>
      </div>
    </VerticalPageLayout>
  );
};

export default ConsumablesPage;
