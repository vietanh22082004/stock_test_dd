import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { portfolioDistribution } from "@/data/market-data";

const COLORS = [
  "#10b981", // emerald
  "#3b82f6", // blue
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // violet
  "#06b6d4", // cyan
  "#ec4899", // pink
  "#6366f1", // indigo
  "#14b8a6", // teal
  "#f97316", // orange
];

export default function PortfolioChart() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8">
          Sơ đồ tài chính - STB 3.39%
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={portfolioDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ symbol, percentage }) =>
                `${symbol} ${percentage.toFixed(2)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="percentage"
            >
              {portfolioDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value.toFixed(2)}%`}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "4px",
                color: "#fff",
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
              }}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Portfolio Stats */}
        <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Tổng giá trị
            </p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              3,501K
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Cổ phiếu
            </p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              10
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Lợi nhuận
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              +12.5%
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              ROI
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              +8.2%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
