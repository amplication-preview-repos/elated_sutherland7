import { Injectable } from "@nestjs/common";
import { WalletDto } from "../walletModule/WalletDto";

@Injectable()
export class WalletModuleService {
  constructor() {}
  async CreateWallet(args: WalletDto): Promise<WalletDto> {
    throw new Error("Not implemented");
  }
  async GetAllWallets(args: WalletDto): Promise<WalletDto[]> {
    throw new Error("Not implemented");
  }
}
