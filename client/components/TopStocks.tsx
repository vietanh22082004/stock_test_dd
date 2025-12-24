import { TopStock } from "@/data/market-data";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TopStocksProps {
  topGainers: TopStock[];
  topLosers: TopStock[];
}

export default function TopStocks({ topGainers, topLosers }: TopStocksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Top Gainers */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
          <h3 className="text-lg font-bold text-white">Top tăng giá</h3>
          <p className="text-xs text-green-50 mt-1">Mã cổ phiếu tăng nhiều nhất</p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
          {topGainers.map((stock, index) => (
            <div
              key={stock.id}
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-950">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {stock.symbol}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {stock.name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600 dark:text-green-400">
                    +{stock.changePercent.toFixed(2)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    #{index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Losers */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 px-6 py-4">
          <h3 className="text-lg font-bold text-white">Top giảm giá</h3>
          <p className="text-xs text-red-50 mt-1">Mã cổ phiếu giảm nhiều nhất</p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
          {topLosers.map((stock, index) => (
            <div
              key={stock.id}
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-950">
                    <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {stock.symbol}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {stock.name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-red-600 dark:text-red-400">
                    {stock.changePercent.toFixed(2)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    #{index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
