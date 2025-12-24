export interface StockIndex {
  id: string;
  name: string;
  code: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  previousClose: number;
}

export interface TopStock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  volume: number;
}

export interface PortfolioStock {
  symbol: string;
  percentage: number;
  amount: number;
}

export interface DetailedStock {
  id: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  value: number;
  average: number;
  foreignBuy: number;
  foreignSell: number;
  priceBoard: string;
}

export const stockIndices: StockIndex[] = [
  {
    id: "vn-index",
    name: "VN-INDEX",
    code: "VN-INDEX",
    price: 1783.32,
    change: 14.77,
    changePercent: 0.83,
    volume: 0,
    previousClose: 1768.55,
  },
  {
    id: "vn30-index",
    name: "VN30-INDEX",
    code: "VN30-INDEX",
    price: 2023.45,
    change: 20.28,
    changePercent: 1.0,
    volume: 0,
    previousClose: 2003.17,
  },
  {
    id: "hnx-index",
    name: "HNX-INDEX",
    code: "HNX-INDEX",
    price: 256.88,
    change: 1.41,
    changePercent: 0.55,
    volume: 0,
    previousClose: 255.47,
  },
  {
    id: "upcom",
    name: "UPCOM",
    code: "UPCOM",
    price: 120.09,
    change: 0.34,
    changePercent: 0.28,
    volume: 0,
    previousClose: 119.75,
  },
];

export const topGainers: TopStock[] = [
  { id: "1", symbol: "DGW", name: "DGW", price: 0, changePercent: 11.1, volume: 0 },
  { id: "2", symbol: "FID", name: "FID", price: 0, changePercent: 10.5, volume: 0 },
  { id: "3", symbol: "RNA", name: "RNA", price: 0, changePercent: 8.82, volume: 0 },
  { id: "4", symbol: "SHS", name: "SHS", price: 0, changePercent: 8.47, volume: 0 },
  { id: "5", symbol: "KDM", name: "KDM", price: 0, changePercent: 8.3, volume: 0 },
];

export const topLosers: TopStock[] = [
  { id: "1", symbol: "VTF", name: "VTF", price: 0, changePercent: -14.35, volume: 0 },
  { id: "2", symbol: "VTC", name: "VTC", price: 0, changePercent: -10.68, volume: 0 },
  { id: "3", symbol: "CTP", name: "CTP", price: 0, changePercent: -9.65, volume: 0 },
  { id: "4", symbol: "PGV", name: "PGV", price: 0, changePercent: -9.5, volume: 0 },
  { id: "5", symbol: "HDG", name: "HDG", price: 0, changePercent: -7.65, volume: 0 },
];

export const portfolioDistribution: PortfolioStock[] = [
  { symbol: "STB", percentage: 3.39, amount: 120000 },
  { symbol: "VIC", percentage: 8.5, amount: 300000 },
  { symbol: "VNM", percentage: 12.1, amount: 425000 },
  { symbol: "VCB", percentage: 15.2, amount: 535000 },
  { symbol: "TCB", percentage: 10.5, amount: 370000 },
  { symbol: "BAA", percentage: 8.3, amount: 292000 },
  { symbol: "MWG", percentage: 7.1, amount: 250000 },
  { symbol: "BVH", percentage: 9.2, amount: 324000 },
  { symbol: "FPT", percentage: 6.8, amount: 239000 },
  { symbol: "CTG", percentage: 18.9, amount: 666000 },
];

// Chart data for market trends
export const marketTrendData = [
  { date: "2024-01", vn_index: 1200, vn30: 1800, hnx: 200 },
  { date: "2024-02", vn_index: 1250, vn30: 1850, hnx: 210 },
  { date: "2024-03", vn_index: 1300, vn30: 1900, hnx: 220 },
  { date: "2024-04", vn_index: 1350, vn30: 1950, hnx: 230 },
  { date: "2024-05", vn_index: 1400, vn30: 2000, hnx: 240 },
  { date: "2024-06", vn_index: 1500, vn30: 2050, hnx: 250 },
  { date: "2024-07", vn_index: 1600, vn30: 2100, hnx: 255 },
  { date: "2024-08", vn_index: 1650, vn30: 2000, hnx: 260 },
  { date: "2024-09", vn_index: 1700, vn30: 2050, hnx: 265 },
  { date: "2024-10", vn_index: 1750, vn30: 2100, hnx: 270 },
  { date: "2024-11", vn_index: 1783.32, vn30: 2023.45, hnx: 256.88 },
];

// Sector performance data
export const sectorPerformance = [
  { sector: "Ngân hàng", value: 15.2, change: 2.3 },
  { sector: "Viễn thông", value: 12.8, change: -1.2 },
  { sector: "Hóa dầu", value: 10.5, change: 1.8 },
  { sector: "Điện lực", value: 9.3, change: 0.5 },
  { sector: "Bất động sản", value: 8.7, change: 2.1 },
  { sector: "Xây dựng", value: 7.2, change: -0.8 },
  { sector: "Thực phẩm", value: 6.8, change: 1.2 },
  { sector: "Công nghệ", value: 6.1, change: 3.5 },
  { sector: "Khác", value: 23.4, change: 0.9 },
];

// Detailed stock list for dashboard
export const detailedStocks: DetailedStock[] = [
  {
    id: "acb",
    symbol: "ACB",
    price: 25.05,
    change: 0.65,
    changePercent: 2.67,
    open: 24.6,
    high: 25.35,
    low: 24.5,
    volume: 22890000,
    value: 574456500,
    average: 24.95,
    foreignBuy: 1245000,
    foreignSell: 890000,
    priceBoard: "HOSE",
  },
  {
    id: "adm",
    symbol: "ADM",
    price: 21.3,
    change: -0.55,
    changePercent: -2.52,
    open: 21.75,
    high: 22.0,
    low: 21.1,
    volume: 8945000,
    value: 190389500,
    average: 21.28,
    foreignBuy: 450000,
    foreignSell: 650000,
    priceBoard: "HOSE",
  },
  {
    id: "ags",
    symbol: "AGS",
    price: 45.2,
    change: 1.2,
    changePercent: 2.73,
    open: 44.5,
    high: 45.8,
    low: 44.2,
    volume: 5230000,
    value: 236644000,
    average: 45.15,
    foreignBuy: 320000,
    foreignSell: 210000,
    priceBoard: "HOSE",
  },
  {
    id: "bie",
    symbol: "BIE",
    price: 67.8,
    change: -1.85,
    changePercent: -2.66,
    open: 69.4,
    high: 70.2,
    low: 67.5,
    volume: 3450000,
    value: 234060000,
    average: 67.82,
    foreignBuy: 180000,
    foreignSell: 320000,
    priceBoard: "HOSE",
  },
  {
    id: "bvh",
    symbol: "BVH",
    price: 89.5,
    change: 2.1,
    changePercent: 2.41,
    open: 87.8,
    high: 90.1,
    low: 87.5,
    volume: 1250000,
    value: 111937500,
    average: 89.55,
    foreignBuy: 95000,
    foreignSell: 75000,
    priceBoard: "HOSE",
  },
  {
    id: "caf",
    symbol: "CAF",
    price: 34.5,
    change: -0.75,
    changePercent: -2.13,
    open: 35.1,
    high: 35.5,
    low: 34.2,
    volume: 4120000,
    value: 142140000,
    average: 34.52,
    foreignBuy: 210000,
    foreignSell: 380000,
    priceBoard: "HOSE",
  },
  {
    id: "ctg",
    symbol: "CTG",
    price: 23.15,
    change: 0.55,
    changePercent: 2.43,
    open: 22.8,
    high: 23.4,
    low: 22.7,
    volume: 31450000,
    value: 728497500,
    average: 23.12,
    foreignBuy: 1820000,
    foreignSell: 1450000,
    priceBoard: "HOSE",
  },
  {
    id: "drl",
    symbol: "DRL",
    price: 78.9,
    change: 1.45,
    changePercent: 1.87,
    open: 77.6,
    high: 79.2,
    low: 77.3,
    volume: 2890000,
    value: 228081000,
    average: 78.85,
    foreignBuy: 165000,
    foreignSell: 145000,
    priceBoard: "HOSE",
  },
  {
    id: "fpt",
    symbol: "FPT",
    price: 56.8,
    change: 0.8,
    changePercent: 1.43,
    open: 56.2,
    high: 57.1,
    low: 56.0,
    volume: 8750000,
    value: 497500000,
    average: 56.75,
    foreignBuy: 520000,
    foreignSell: 380000,
    priceBoard: "HOSE",
  },
  {
    id: "hdb",
    symbol: "HDB",
    price: 34.95,
    change: -0.85,
    changePercent: -2.38,
    open: 35.7,
    high: 36.2,
    low: 34.8,
    volume: 18920000,
    value: 661594000,
    average: 34.98,
    foreignBuy: 1120000,
    foreignSell: 1520000,
    priceBoard: "HOSE",
  },
  {
    id: "kdh",
    symbol: "KDH",
    price: 42.3,
    change: 1.1,
    changePercent: 2.67,
    open: 41.5,
    high: 42.8,
    low: 41.2,
    volume: 6780000,
    value: 286794000,
    average: 42.28,
    foreignBuy: 405000,
    foreignSell: 285000,
    priceBoard: "HOSE",
  },
  {
    id: "lic",
    symbol: "LIC",
    price: 44.7,
    change: -1.2,
    changePercent: -2.61,
    open: 45.8,
    high: 46.2,
    low: 44.5,
    volume: 5450000,
    value: 243415000,
    average: 44.72,
    foreignBuy: 325000,
    foreignSell: 485000,
    priceBoard: "HOSE",
  },
];
