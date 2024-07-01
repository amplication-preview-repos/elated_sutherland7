import { Module } from "@nestjs/common";
import { WalletModuleService } from "./walletmodule.service";
import { WalletModuleController } from "./walletmodule.controller";
import { WalletModuleResolver } from "./walletmodule.resolver";

@Module({
  controllers: [WalletModuleController],
  providers: [WalletModuleService, WalletModuleResolver],
  exports: [WalletModuleService],
})
export class WalletModuleModule {}
