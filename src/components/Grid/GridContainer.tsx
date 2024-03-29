import { filterBy } from "@progress/kendo-data-query";
import { PagerTargetEvent } from "@progress/kendo-react-data-tools";
import {
  GridColumn as Column,
  Grid,
  GridFilterChangeEvent,
  GridPageChangeEvent,
} from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { useState } from "react";
import { GridContainerProps, PageState } from "../../@types/GridContainer";
import { columns } from "./Helpers/columns";
import { initialDataState, initialFilter } from "./Helpers/initialPagingAndFilter";

export function GridContainer({ trendingData }: GridContainerProps) {
  const [filter, setFilter] = useState(initialFilter);

  const [page, setPage] = useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = useState<number | string | undefined>();

  const handlePageChange = (event: GridPageChangeEvent) => {
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === "All" ? trendingData.length : event.page.take;

    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };

  const handleFilterChange = (e: GridFilterChangeEvent) => {
    e.filter?.filters.length > 0
      ? setPage({
          ...page,
          take: trendingData.length,
        })
      : setPage({
          ...page,
          take: 5,
        });

    return setFilter(e.filter);
  };

  const filteredData = filterBy(trendingData.slice(page.skip, page.take + page.skip), filter);

  return (
    <Grid
      style={{ height: "600px" }}
      scrollable="scrollable"
      data={filteredData}
      filterable={true}
      filter={filter}
      onFilterChange={handleFilterChange}
      total={trendingData.length}
      pageable={{
        buttonCount: 3,
        pageSizes: [5, 10, 15, "All"],
        pageSizeValue: pageSizeValue,
      }}
      onPageChange={handlePageChange}
      {...page}
    >
      {columns.map((column, index) => (
        <Column {...column} key={index} />
      ))}
    </Grid>
  );
}

