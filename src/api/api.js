/**
 * method:  默认post, [get,post,delete,put]
 * cache: 缓存接口数据， 默认false
 * isForm: 接口返回格式， 默认true 表示application/x-www-form-urlencoded, false表示application/json
 * url中加入:id，会拼接到url中，在调用接口的时候需要传入id:xxx
 */
let api = {
  queryFlightA: { url: 'aoms-statistics/statistics/viewFlightStat/queryToday' }, // 查询当天的进港航班数据 :进港{"inOutFlag"："A"} 出港{"inOutFlag"："D"}
  queryFlightD: { url: 'aoms-statistics/statistics/viewFlightStat/queryToday' }, // 查询当天的进港航班数据 :进港{"inOutFlag"："A"} 出港{"inOutFlag"："D"}
  queryFlight: { url: 'aoms-statistics/statistics/aomsFlightStat/queryToday' }, // 查询当日航班保障实况
  queryStand: { url: 'aoms-statistics/statistics/viewStandStat/queryToday' }, // 查询机位使用情况
  queryOtherStand: { url: 'aoms-statistics/basicdata/flightInOutStat/queryStandStat' }, // 查询廊桥位
  queryPassenger: { url: 'aoms-statistics/statistics/viewDeparturePassengerStat/queryToday' }, // 查询旅客
  queryDuty: { url: 'aoms-statistics/basicdata/dutyInfo/queryAll' }, // 查询旅客
  queryGreen: { url: 'aoms-statistics/basicdata/flightInOutStat/queryBridgeStat' }, // 查询放行正常率
  queryRate: { url: 'aoms-statistics/basicdata/flightInOutStat/queryFlightStat' } // 查询放行正常率
}
for (var k in api) {
  let urlHost = window.htp.apihost
  let url = api[k].url

  if (process.env.NODE_ENV === 'development') {
    urlHost = '/proxy/'
  }
  api[k].url = urlHost + url
}

export default api
