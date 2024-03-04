import { filterBy } from "@progress/kendo-data-query";
import { PagerTargetEvent } from "@progress/kendo-react-data-tools";
import { GridColumn as Column, Grid, GridPageChangeEvent } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { useState } from "react";
import { GridContainerProps, PageState } from "../../@types/GridContainer";
import { columns } from "./Helpers/columns";
import { initialDataState, initialFilter } from "./Helpers/initialPagingAndFilter";

export function GridContainer({ trendingData }: GridContainerProps) {
  const [filter, setFilter] = useState(initialFilter);

  const [page, setPage] = useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = useState<number | string | undefined>();

  const pageChange = (event: GridPageChangeEvent) => {
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

  return (
    <Grid
      style={{ height: "600px" }}
      scrollable="scrollable"
      data={filterBy(trendingData.slice(page.skip, page.take + page.skip), filter)}
      filterable={true}
      filter={filter}
      onFilterChange={(e) => setFilter(e.filter)}
      skip={page.skip}
      take={page.take}
      total={trendingData.length}
      pageable={{
        buttonCount: 3,
        pageSizes: [5, 10, 15, "All"],
        pageSizeValue: pageSizeValue,
      }}
      onPageChange={pageChange}
    >
      {columns.map((column, index) => (
        <Column {...column} key={index} />
      ))}
    </Grid>
  );
}

