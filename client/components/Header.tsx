import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              V
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">
              V-Stock
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:bg-zinc-800 rounded-md transition-colors text-sm font-medium"
            >
              Trang chủ
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-white hover:bg-zinc-800 rounded-md transition-colors text-sm font-medium"
            >
              Thị trường
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 text-white hover:bg-zinc-800 rounded-md transition-colors text-sm font-medium"
            >
              Bảng điều
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-zinc-800 rounded-md px-3 py-2 max-w-xs">
              <Search className="w-4 h-4 text-gray-400" />
              <Input
                placeholder="Bạn cần phân tích cổ phiếu nào?"
                className="bg-transparent border-0 text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:outline-none text-sm ml-2"
              />
            </div>

            <button className="p-2 hover:bg-zinc-800 rounded-md transition-colors relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium hidden sm:inline-flex"
            >
              Đăng nhập
            </Button>
          </div>

          {/* Mobile Menu Button - would add drawer/sheet here for mobile nav */}
          <button className="md:hidden p-2 hover:bg-zinc-800 rounded-md transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
