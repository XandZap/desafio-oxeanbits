import { ITrendingData } from "../@types/trendingData";

const base_url = process.env.REACT_APP_API_BASE_URL + "trending?api_key=" + process.env.REACT_APP_API_GIPHY_KEY + "&limit=50";

export async function getTrendingGiphyData() {
  if (!base_url) return;
  const response = await fetch(base_url);
  if (!response.ok) {
    throw new Error("Problema ao buscar dados");
  }
  const dados: ITrendingData = await response.json();
  return dados;
}

