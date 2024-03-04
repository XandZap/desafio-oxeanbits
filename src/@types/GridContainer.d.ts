import { ITrending } from "./trendingData";

export interface PageState {
  skip: number;
  take: number;
}

export interface GridContainerProps {
  children?: React.ReactNode;
  trendingData: ITrending[];
}
