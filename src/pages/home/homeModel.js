import apis from "./homeApi";

const { getOverviewData, getDonutData, getTreemapData, getStackedData } = apis;

export default {
  namespace: "home",
  state: {
    overviewData: {}, // 概览数据
    donutData1: [], // 饼图数据（按区块）
    donutData2: [], // 饼图数据（按户型）
    donutData3: [], // 饼图数据（按价格）
    donutData4: [], // 饼图数据（按面积）
    treemapData: {}, // 树图图数据
    stackedData: [] // 折线图数据
  },
  effects: {
    // 获取概览数据
    *getOverviewData({ payload }, { call, put }) {
      const { data = {} } = yield call(getOverviewData, payload);
      yield put({ type: "saveOverviewData", payload: data });
    },
    // 获取饼图数据
    *getDonutData({ payload }, { call, put }) {
      const { data = [] } = yield call(getDonutData, payload);
      const { filterData = [] } = data;
      switch (payload.type) {
        case 1:
          yield put({ type: "saveDonutData1", payload: filterData });
          break;
        case 2:
          yield put({ type: "saveDonutData2", payload: filterData });
          break;
        case 3:
          yield put({ type: "saveDonutData3", payload: filterData });
          break;
        case 4:
          yield put({ type: "saveDonutData4", payload: filterData });
          break;
        default:
          yield put({ type: "saveDonutData1", payload: filterData });
          break;
      }
    },
    // 获取矩形树图图数据
    *getTreemapData({ payload }, { call, put }) {
      const { data = [] } = yield call(getTreemapData, payload);
      const { filterData = {} } = data;
      yield put({ type: "saveTreemapData", payload: filterData });
    },
    // 获取折线图数据
    *getStackedData({ payload }, { call, put }) {
      const { data = [] } = yield call(getStackedData, payload);
      const { filterData = [] } = data;
      yield put({ type: "saveStackedData", payload: filterData });
    }
  },
  reducers: {
    saveOverviewData(state, { payload }) {
      return {
        ...state,
        overviewData: payload
      };
    },
    saveDonutData1(state, { payload }) {
      return {
        ...state,
        donutData1: payload
      };
    },
    saveDonutData2(state, { payload }) {
      return {
        ...state,
        donutData2: payload
      };
    },
    saveDonutData3(state, { payload }) {
      return {
        ...state,
        donutData3: payload
      };
    },
    saveDonutData4(state, { payload }) {
      return {
        ...state,
        donutData4: payload
      };
    },
    saveTreemapData(state, { payload }) {
      return {
        ...state,
        treemapData: payload
      };
    },
    saveStackedData(state, { payload }) {
      return {
        ...state,
        stackedData: payload
      };
    }
  }
};