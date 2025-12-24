import Header from "@/components/Header";
import IndexCards from "@/components/IndexCards";
import MarketCharts from "@/components/MarketCharts";
import TopStocks from "@/components/TopStocks";
import PortfolioChart from "@/components/PortfolioChart";
import {
  stockIndices,
  topGainers,
  topLosers,
} from "@/data/market-data";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Thống kê chỉ số thị trường các sàn chứng khoán Việt Nam
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Cập nhật dữ liệu thị trường thực tế từ các sàn giao dịch
          </p>
        </div>

        {/* Index Cards Section */}
        <section className="mb-8">
          <IndexCards indices={stockIndices} />
        </section>

        {/* Charts and Top Stocks Combined Section */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <MarketCharts showSectorChart={false} />
          </div>

          {/* Top Gainers and Losers - Takes 1 column */}
          <TopStocks
            topGainers={topGainers}
            topLosers={topLosers}
            layout="stacked"
          />
        </section>

        {/* Sector Performance Chart */}
        <section className="mb-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <MarketCharts showSectorChart={true} />
          </div>
        </section>

        {/* Portfolio Chart Section */}
        <section className="mb-8">
          <PortfolioChart />
        </section>

        {/* Footer Section */}
        <footer className="mt-12 py-8 border-t border-gray-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Về V-Stock
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Dịch vụ
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Phân tích
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Tư vấn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Công cụ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Pháp lý
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 V-Stock. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
