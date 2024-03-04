import { render, screen } from "@testing-library/react";
import { gridTrendingData } from "../../mocks/gridData";
import { GridContainer } from "./GridContainer";
describe("render GridContainer", () => {
  
  test("render Column ID", () => {
    render(<GridContainer trendingData={gridTrendingData} />);
    const columnElement = screen.getByText("ID");
    const IdElement = screen.getByText("hWuGgJlK29qYK2DXTj");

    expect(columnElement).toBeInTheDocument;
    expect(IdElement).toBeInTheDocument;
  });

  test("render Column Title", () => {
    render(<GridContainer trendingData={gridTrendingData} />);
    const columnElement = screen.getByText("Title");
    const titleElement = screen.getByText("Coming On My Way GIF by BRIT Awards");

    expect(columnElement).toBeInTheDocument;
    expect(titleElement).toBeInTheDocument;
  });

  test("render Column User", () => {
    render(<GridContainer trendingData={gridTrendingData} />);
    const columnElement = screen.getByText("User");
    const userElement = screen.getByText("brits");

    expect(columnElement).toBeInTheDocument;
    expect(userElement).toBeInTheDocument;
  });

  test("render Column GIF", () => {
    render(<GridContainer trendingData={gridTrendingData} />);
    const columnElement = screen.getByText("GIF");
    const gifElement = document.querySelector("img") as HTMLImageElement;

    expect(gifElement).toBeInTheDocument;
    expect(gifElement.src).toContain(
      "https://media3.giphy.com/media/hWuGgJlK29qYK2DXTj/200w.gif?cid=48c4f314wy9bgax5hpn0hs2qmmv5i8rydyk9udq4kf1xl6et&ep=v1_gifs_trending&rid=200w.gif&ct=g"
    );
    expect(columnElement).toBeInTheDocument;
  });
});

export { };

