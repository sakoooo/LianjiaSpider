import { get, post } from "../../utils/request";

// 获取API查询推荐参数（已完成） （普通用户）

// 获取地区信息
const getHousePosition = data => post("/house/getPosition", data);
// 获取概览数据
const getOverviewData = data => post("/house/searchOverviewData", data);
// 获取各区表格信息
const getTableData = data => post("/house/searchTableData", data);
// 获取饼图数据
const getDonutData = data => post("/house/searchDonutData", data);
// 获取柱状图数据
const getBarChartData = data => post("/house/searchBarChartData", data);
// 获取排名数据
const getRankData = data => post("/house/searchRankData", data);
// 获取曲线折线图数据
const getCurvedLineChartData = data =>
  post("/house/searchCurvedLineChartData", data);
// 获取装修与平均单价关系数据
const getDecorPriceData = data => post("/house/searchDecorPriceData", data);
// 获取曲线折线图数据
const getDecorBoxData = data => post("/house/searchDecorBoxData", data);

export default {
  getHousePosition,
  getOverviewData,
  getTableData,
  getDonutData,
  getBarChartData,
  getRankData,
  getCurvedLineChartData,
  getDecorPriceData,
  getDecorBoxData
};
