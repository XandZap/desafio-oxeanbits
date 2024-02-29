import { Suspense } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { getTrendingGiphyData } from "./services/getTrendingGiphyData";

function App() {
  const { status, data: trendingData, error } = useQuery("randomGiphyData", getTrendingGiphyData);
  if (!trendingData) return <p>erro</p>;
  const { data } = trendingData;
  console.log("data :>> ", data);
  return (
    <Suspense fallback={<p>carregando...</p>}>
      <div className="App">
        {data.map((giphy) => (
          <div
            key={giphy.id}
            style={{
              border: "1px solid red",
              maxWidth: giphy.images.fixed_width.width,
              overflow: "hidden",
            }}
          >
            <h2>{giphy.title}</h2>
            <img src={giphy.images.fixed_width.url} alt={giphy.title} width={giphy.images.fixed_width.width} />
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default App;

