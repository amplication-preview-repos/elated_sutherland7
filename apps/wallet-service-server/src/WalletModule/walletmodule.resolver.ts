import * as graphql from "@nestjs/graphql";
import { WalletDto } from "../walletModule/WalletDto";
import { WalletModuleService } from "./walletmodule.service";

export class WalletModuleResolver {
  constructor(protected readonly service: WalletModuleService) {}

  @graphql.Mutation(() => WalletDto)
  async CreateWallet(
    @graphql.Args()
    args: WalletDto
  ): Promise<WalletDto> {
    return this.service.CreateWallet(args);
  }

  @graphql.Query(() => [WalletDto])
  async GetAllWallets(
    @graphql.Args()
    args: WalletDto
  ): Promise<WalletDto[]> {
    return this.service.GetAllWallets(args);
  }
}
