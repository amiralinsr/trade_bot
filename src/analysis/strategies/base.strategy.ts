export interface MarketData {  // TS interface: Defines shape of data
    usd: number;
    usd_24h_change: number;
  }
  
  export abstract class BaseStrategy {  // Abstract class: Base for strategies
    abstract analyze(data: MarketData): { sentiment: 'long' | 'short' | 'neutral'; alert?: string };
  }