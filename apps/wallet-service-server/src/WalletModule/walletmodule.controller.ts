import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WalletModuleService } from "./walletmodule.service";
import { WalletDto } from "../walletModule/WalletDto";

@swagger.ApiTags("walletModules")
@common.Controller("walletModules")
export class WalletModuleController {
  constructor(protected readonly service: WalletModuleService) {}

  @common.Post("/wallets")
  @swagger.ApiOkResponse({
    type: WalletDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateWallet(
    @common.Body()
    body: WalletDto
  ): Promise<WalletDto> {
        return this.service.CreateWallet(body);
      }

  @common.Get("/wallets")
  @swagger.ApiOkResponse({
    type: WalletDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllWallets(
    @common.Body()
    body: WalletDto
  ): Promise<WalletDto[]> {
        return this.service.GetAllWallets(body);
      }
}
