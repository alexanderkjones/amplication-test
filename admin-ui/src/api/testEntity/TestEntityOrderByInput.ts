import { SortOrder } from "../../util/SortOrder";

export type TestEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testField?: SortOrder;
  updatedAt?: SortOrder;
};
