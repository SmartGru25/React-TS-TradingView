import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DateRange } from "../index";

export interface MarketOverviewSymbol {
  s: string;
  d?: string;
}

export interface MarketOverviewTab {
  title: string;
  symbols: MarketOverviewSymbol[];
  originalTitle: string;
}

export interface MarketOverviewProps {
  colorTheme?: ColorTheme;
  dateRange?: DateRange;
  showChart?: boolean;
  locale?: string;
  largeChartUrl?: string;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  plotLineColorGrowing?: string;
  plotLineColorFalling?: string;
  gridLineColor?: string;
  scaleFontColor?: string;
  belowLineFillColorGrowing?: string;
  belowLineFillColorFalling?: string;
  symbolActiveColor?: string;
  tabs?: MarketOverviewTab[];

  children?: never;
}

const defaultTabs: MarketOverviewTab[] = [
  {
    title: "Indices",
    symbols: [
      {
        s: "FOREXCOM:SPXUSD",
        d: "S&P 500",
      },
      {
        s: "FOREXCOM:NSXUSD",
        d: "Nasdaq 100",
      },
      {
        s: "FOREXCOM:DJI",
        d: "Dow 30",
      },
      {
        s: "INDEX:NKY",
        d: "Nikkei 225",
      },
      {
        s: "INDEX:DEU30",
        d: "DAX Index",
      },
      {
        s: "FOREXCOM:UKXGBP",
        d: "UK 100",
      },
    ],
    originalTitle: "Indices",
  },
  {
    title: "Commodities",
    symbols: [
      {
        s: "CME_MINI:ES1!",
        d: "S&P 500",
      },
      {
        s: "CME:6E1!",
        d: "Euro",
      },
      {
        s: "COMEX:GC1!",
        d: "Gold",
      },
      {
        s: "NYMEX:CL1!",
        d: "Crude Oil",
      },
      {
        s: "NYMEX:NG1!",
        d: "Natural Gas",
      },
      {
        s: "CBOT:ZC1!",
        d: "Corn",
      },
    ],
    originalTitle: "Commodities",
  },
  {
    title: "Bonds",
    symbols: [
      {
        s: "CME:GE1!",
        d: "Eurodollar",
      },
      {
        s: "CBOT:ZB1!",
        d: "T-Bond",
      },
      {
        s: "CBOT:UB1!",
        d: "Ultra T-Bond",
      },
      {
        s: "EUREX:FGBL1!",
        d: "Euro Bund",
      },
      {
        s: "EUREX:FBTP1!",
        d: "Euro BTP",
      },
      {
        s: "EUREX:FGBM1!",
        d: "Euro BOBL",
      },
    ],
    originalTitle: "Bonds",
  },
  {
    title: "Forex",
    symbols: [
      {
        s: "FX:EURUSD",
      },
      {
        s: "FX:GBPUSD",
      },
      {
        s: "FX:USDJPY",
      },
      {
        s: "FX:USDCHF",
      },
      {
        s: "FX:AUDUSD",
      },
      {
        s: "FX:USDCAD",
      },
    ],
    originalTitle: "Forex",
  },
];

const MarketOverview: React.FC<MarketOverviewProps> = ({
  colorTheme = "light",
  dateRange = "12M",
  showChart = true,
  locale = "en",
  largeChartUrl = undefined,
  isTransparent = false,
  showSymbolLogo = true,
  width = 400,
  height = 660,
  autosize = false,
  plotLineColorGrowing = "rgba(33, 150, 243, 1)",
  plotLineColorFalling = "rgba(33, 150, 243, 1)",
  gridLineColor = "rgba(240, 243, 250, 1)",
  scaleFontColor = "rgba(120, 123, 134, 1)",
  belowLineFillColorGrowing = "rgba(33, 150, 243, 0.12)",
  belowLineFillColorFalling = "rgba(33, 150, 243, 0.12)",
  symbolActiveColor = "rgba(33, 150, 243, 0.12)",
  tabs = defaultTabs,
  ...props
}) => {
  return setDivRef(
    {
      colorTheme,
      dateRange,
      showChart,
      locale,
      largeChartUrl,
      isTransparent,
      showSymbolLogo,
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      ...(showChart ? { plotLineColorGrowing } : {}),
      ...(showChart ? { plotLineColorFalling } : {}),
      ...(showChart ? { gridLineColor } : {}),
      ...(showChart ? { scaleFontColor } : {}),
      ...(showChart ? { belowLineFillColorGrowing } : {}),
      ...(showChart ? { belowLineFillColorFalling } : {}),
      ...(showChart ? { symbolActiveColor } : {}),
      tabs,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
  );
};

export default MarketOverview;
