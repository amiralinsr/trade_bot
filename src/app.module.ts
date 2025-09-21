import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';
import { AnalysisModule } from './analysis/analysis.module';
import { TelegramModule } from './telegram/telegram.module';
import { HyperliquidModule } from './hyperliquid/hyperliquid.module';

@Module({
  imports: [MarketModule, AnalysisModule, TelegramModule, HyperliquidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
