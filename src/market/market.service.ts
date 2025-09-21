import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MarketService {
  async fetchMarketData(coin: string = 'bitcoin'): Promise<any> {  // 'any' is temp; we'll type later
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
    const response = await axios.get(url);
    return response.data[coin];  // e.g., { usd: 60000, usd_24h_change: 5 }
  }
}
