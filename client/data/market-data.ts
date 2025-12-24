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
