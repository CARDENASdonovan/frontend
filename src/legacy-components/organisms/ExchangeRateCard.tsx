import Chart from "@/components/molecules/Chart";
import { AssetsData } from "@/components/pages/LandingPage/LandingPage";
import "./ExchangeRateCard.scss";

export interface ExchangeRateCardProps {
  assets: AssetsData[];
}

export default function ExchangeRateCard(
  props: ExchangeRateCardProps
): React.ReactElement {
  const series = props.assets.map((asset) => ({
    x: asset.historicalPrices.map((price) => price.date),
    y: asset.historicalPrices.map((price) => price.price),
  }));

  const chartProps = {
    series: series,
    name: props.assets.map((asset) => asset.symbol),
  };

  return (
    <main className="exchange-rate-card">
      <h2>Evolution du prix par jour</h2>
      <p>Last time refreshed: {new Date().toLocaleString()}</p>
      <div className="chart-container">
        <Chart {...chartProps} />
      </div>
    </main>
  );
}
