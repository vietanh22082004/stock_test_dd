import { StockIndex } from "@/data/market-data";
import { TrendingUp, TrendingDown } from "lucide-react";

interface IndexCardsProps {
  indices: StockIndex[];
}

export default function IndexCards({ indices }: IndexCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {indices.map((index) => (
        <div
          key={index.id}
          className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800"
        >
          {/* Header with name and mini chart placeholder */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-sm">
                {index.name}
              </h3>
              <p className="text-gray-500 text-xs mt-1">GTGD bởi dùng</p>
            </div>
            {/* Mini chart indicator - simple SVG pattern */}
            <svg
              className="w-12 h-8 opacity-50"
              viewBox="0 0 50 30"
              fill="none"
            >
              <polyline
                points="0,20 10,15 20,18 30,10 40,12 50,8"
                stroke="currentColor"
                strokeWidth="1.5"
                className={
                  index.changePercent >= 0 ? "text-green-500" : "text-red-500"
                }
                fill="none"
              />
            </svg>
          </div>

          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {index.price.toLocaleString("vi-VN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Change and Percentage */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                index.changePercent >= 0
                  ? "bg-green-100 dark:bg-green-950"
                  : "bg-red-100 dark:bg-red-950"
              }`}
            >
              {index.changePercent >= 0 ? (
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
              )}
              <span
                className={`text-sm font-semibold ${
                  index.changePercent >= 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {index.changePercent >= 0 ? "+" : ""}
                {index.changePercent.toFixed(2)}%
              </span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              GTGD bởi dùng
            </span>
          </div>

          {/* Volume section */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-xs">Khối lượng</span>
              <span className="text-gray-900 dark:text-white font-semibold text-sm">
                {index.volume}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
