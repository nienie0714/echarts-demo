import api from '../api/api'
import { jsonCallback } from '../utils'
import Mock from 'mockjs'

// 查询机位使用情况
Mock.mock(api.queryFlightA.url, 'post', jsonCallback(
  {
      "code": 0,
      "msg": "success",
      "data": {
          "statDate": "2019-03-19 00:00:00",
          "inOutFlag": "A",
          "totalExecFlight": 106,
          "nowExecFlight": 29,
          "execFlight": 2,
          "canFlight": 0,
          "dlyFlight": 0,
          "noExecFligth": 104,
          "normalExecFlight": 2,
          "execDlyFlight": 0,
          "currCompletionRate": 0.069,
          "dayCompletionRate": 0.019,
          "rtnFlight": 0,
          "noExecDlyFlight": 0,
          "normalRate": 1,
          "abnormalRate": 0
      }
  }
))
