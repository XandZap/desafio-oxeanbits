import { CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { PageState } from "../../../@types/GridContainer";

export const initialFilter: CompositeFilterDescriptor = {
  logic: "and",
  filters: [],
};

export const initialDataState: PageState = { skip: 0, take: 5 };

