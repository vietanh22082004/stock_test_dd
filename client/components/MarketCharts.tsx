import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { marketTrendData, sectorPerformance } from "@/data/market-data";

interface MarketChartsProps {
  type?: "main" | "sector" | "both";
}

export default function MarketCharts({ type = "both" }: MarketChartsProps) {
  return (
    <>
      {/* Market Trends Chart */}
      {(type === "main" || type === "both") && (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Chỉ số PK thị trường các sàn chứng khoán Việt Nam
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                tickFormatter={(date) => date.split("-")[1]}
              />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "4px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend wrapperStyle={{ color: "#6b7280" }} />
              <Line
                type="monotone"
                dataKey="vn_index"
                stroke="#ef4444"
                name="VN-INDEX"
                dot={false}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="vn30"
                stroke="#f97316"
                name="VN30-INDEX"
                dot={false}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="hnx"
                stroke="#3b82f6"
                name="HNX-INDEX"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Sector Performance Chart */}
      {(type === "sector" || type === "both") && (
        <div
          className={`bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800 ${
            type === "both" ? "mt-6" : ""
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Xu hướng ngành
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sectorPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="sector"
                tick={{ fill: "#6b7280", fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "4px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="value" fill="#10b981" name="Thị phần %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
