import "./ConsumableList.scss";

import { ReactElement } from "react";

import { Consumable, ConsumableCategory } from "@/types/api/ConsumableApi";

export interface ConsumableListProps {
  list: Consumable[];
  loading?: boolean;
  error?: string | null;
  onDelete?: (id: string) => void;
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "Never";
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return String(dateString);
  }
}

function getCategoryClass(category: ConsumableCategory): string {
  switch (category) {
    case ConsumableCategory.FOOD:
      return "category-food";
    case ConsumableCategory.BEVERAGE:
      return "category-beverage";
    default:
      return "category-other";
  }
}

export const ConsumableList = ({
  list,
  loading = false,
  error = null,
  onDelete,
}: ConsumableListProps): ReactElement => {
  if (loading) {
    return (
      <div className="consumable-list-container">
        <div className="consumable-status">Loading consumables...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="consumable-list-container">
        <div className="consumable-status error">
          Failed to load consumables: {error}
        </div>
      </div>
    );
  }

  if (!list || list.length === 0) {
    return (
      <div className="consumable-list-container">
        <div className="consumable-status">No consumables found.</div>
      </div>
    );
  }

  return (
    <div className="consumable-list-container">
      <div className="consumable-grid">
        {list.map((item) => (
          <article key={item.id} className="consumable-card">
            <div>
              <header className="card-header">
                <h3 className="item-name">{item.name}</h3>
                <span
                  className={`category-badge ${getCategoryClass(item.category)}`}
                >
                  {item.category}
                </span>
              </header>

              {item.description && (
                <p className="item-description">{item.description}</p>
              )}
            </div>

            <div>
              <div className="item-stats">
                <div className="stat-pill">
                  <span className="stat-label">Price</span>
                  <span className="stat-value price-highlight">
                    {Number(item.price).toFixed(2)} {item.priceCurrency}
                  </span>
                </div>

                <div className="stat-pill">
                  <span className="stat-label">Quantity</span>
                  <span className="stat-value">
                    {item.quantity} {item.quantityUnit}
                  </span>
                </div>
              </div>

              <footer className="card-footer">
                <span className="last-purchased">
                  Purchased: {formatDate(item.lastPurchasedAt)}
                </span>
                {onDelete && (
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onDelete(item.id)}
                    aria-label={`Delete ${item.name}`}
                  >
                    Delete
                  </button>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ConsumableList;
