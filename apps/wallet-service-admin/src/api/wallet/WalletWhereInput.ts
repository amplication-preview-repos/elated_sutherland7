import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WalletWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  walletAddress?: StringNullableFilter;
};
