import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
  walletAddress?: SortOrder;
};
