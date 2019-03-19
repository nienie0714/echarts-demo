import api from '../api/api'
import { jsonCallback } from '../utils'
import Mock from 'mockjs'

// 查询机位使用情况
Mock.mock(api.queryFlightD.url, 'post', jsonCallback(
  {
      "code": 0,
      "msg": "success",
      "data": {
          "statDate": "2019-03-19 00:00:00",
          "inOutFlag": "D",
          "totalExecFlight": 109,
          "nowExecFlight": 10,
          "execFlight": 10,
          "canFlight": 0,
          "dlyFlight": 0,
          "noExecFligth": 99,
          "normalExecFlight": 10,
          "execDlyFlight": 0,
          "currCompletionRate": 1,
          "dayCompletionRate": 0.092,
          "rtnFlight": 0,
          "noExecDlyFlight": 0,
          "normalRate": 1,
          "abnormalRate": 0
      }
  }
))
