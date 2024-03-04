import { Suspense } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { GridContainer } from "./components/Grid/GridContainer";
import { getTrendingGiphyData } from "./services/getTrendingGiphyData";

function App() {
  const { data: trendingData, error } = useQuery("randomGiphyData", getTrendingGiphyData);

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <Suspense fallback={<p>carregando...</p>}>
      {trendingData && (
        <div className="App">
          <GridContainer trendingData={trendingData?.data} />
        </div>
      )}
    </Suspense>
  );
}

export default App;

