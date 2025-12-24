import Header from "@/components/Header";
import { detailedStocks } from "@/data/market-data";
import { TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react";
import { useState } from "react";

type SortField = keyof typeof detailedStocks[0];
type SortOrder = "asc" | "desc";

export default function Dashboard() {
  const [sortField, setSortField] = useState<SortField>("symbol");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedStocks = [...detailedStocks].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortOrder === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    const aNum = typeof aVal === "number" ? aVal : 0;
    const bNum = typeof bVal === "number" ? bVal : 0;

    return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
  });

  const TableHeader = ({ field, label }: { field: SortField; label: string }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 px-2 py-1 rounded transition-colors text-sm"
    >
      {label}
      <ArrowUpDown className="w-4 h-4 opacity-50" />
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />

      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bảng điều
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Dữ liệu cổ phiếu chi tiết từ các sàn giao dịch
          </p>
        </div>

        {/* Stock Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left">
                    <TableHeader field="symbol" label="Mã" />
                  </th>
                  <th className="px-4 py-3 text-left">
                    <TableHeader field="priceBoard" label="Sàn" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="price" label="Giá" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="changePercent" label="% Thay đổi" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="open" label="Mở" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="high" label="Cao" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="low" label="Thấp" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="volume" label="Khối lượng" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="value" label="Giá trị" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="foreignBuy" label="NĐT nước ngoài mua" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <TableHeader field="foreignSell" label="NĐT nước ngoài bán" />
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                {sortedStocks.map((stock) => (
                  <tr
                    key={stock.id}
                    className="hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors"
                  >
                    {/* Symbol */}
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                      {stock.symbol}
                    </td>

                    {/* Price Board */}
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                        {stock.priceBoard}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">
                      {stock.price.toFixed(2)}
                    </td>

                    {/* Change Percent */}
                    <td className="px-4 py-3 text-right">
                      <div
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded font-semibold ${
                          stock.changePercent >= 0
                            ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                            : "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {stock.changePercent >= 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {stock.changePercent >= 0 ? "+" : ""}
                        {stock.changePercent.toFixed(2)}%
                      </div>
                    </td>

                    {/* Open */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {stock.open.toFixed(2)}
                    </td>

                    {/* High */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {stock.high.toFixed(2)}
                    </td>

                    {/* Low */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {stock.low.toFixed(2)}
                    </td>

                    {/* Volume */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {(stock.volume / 1000000).toFixed(1)}M
                    </td>

                    {/* Value */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {(stock.value / 1000000).toFixed(1)}M
                    </td>

                    {/* Foreign Buy */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {(stock.foreignBuy / 1000).toFixed(0)}K
                    </td>

                    {/* Foreign Sell */}
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                      {(stock.foreignSell / 1000).toFixed(0)}K
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Tổng cổ phiếu
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {detailedStocks.length}
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Tăng giá
            </p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {detailedStocks.filter((s) => s.changePercent > 0).length}
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Giảm giá
            </p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {detailedStocks.filter((s) => s.changePercent < 0).length}
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Tổng khối lượng
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {(
                detailedStocks.reduce((sum, s) => sum + s.volume, 0) / 1000000
              ).toFixed(1)}
              M
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
