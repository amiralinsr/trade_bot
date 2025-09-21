import { Module } from '@nestjs/common';
import { HyperliquidService } from './hyperliquid.service';

@Module({
  providers: [HyperliquidService]
})
export class HyperliquidModule {}
