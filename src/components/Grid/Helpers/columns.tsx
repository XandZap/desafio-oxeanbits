import { GridColumnProps, GridCustomCellProps } from "@progress/kendo-react-grid";

export const columns: GridColumnProps[] = [
  {
    field: "id",
    title: "ID",
    filterTitle: "id",
  },
  {
    field: "title",
    title: "Title",
    filterTitle: "title",
  },
  {
    field: "username",
    title: "User",
    filterTitle: "username",
  },
  {
    title: "GIF",
    cell: (props: GridCustomCellProps) => (
      <img style={{ width: "70%", padding: 10 }} src={props.dataItem.images.fixed_width.url} alt="" />
    ),
    filterable: false,
  },
];

