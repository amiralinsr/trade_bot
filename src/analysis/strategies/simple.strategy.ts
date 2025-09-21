import { BaseStrategy, MarketData } from './base.strategy';

export class SimpleStrategy extends BaseStrategy {
  analyze(data: MarketData): { sentiment: 'long' | 'short' | 'neutral'; alert?: string } {
    if (data.usd_24h_change > 2) {
      return { sentiment: 'long', alert: 'Price up >2%! Consider entry.' };
    } else if (data.usd_24h_change < -2) {
      return { sentiment: 'short', alert: 'Price down >2%! Consider short.' };
    }
    return { sentiment: 'neutral' };
  }
}