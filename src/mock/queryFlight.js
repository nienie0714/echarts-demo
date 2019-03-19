import api from '../api/api'
import { jsonCallback } from '../utils'
import Mock from 'mockjs'

// 查询机位使用情况
Mock.mock(api.queryFlight.url, 'post', jsonCallback(
  {
    "code": 0,
    "msg": "success",
    "data": {
        "airportIata": null,
        "statDate": null,
        "totalExecFlight": 215,
        "execFlight": null,
        "canFlight": null,
        "abnormalFlight": null,
        "dlyFlight": null,
        "arrNormalRate": null,
        "depNormalRate": null,
        "arrivalFlight": null,
        "departureFlight": null,
        "domesticFlight": null,
        "internationalFlight": null,
        "onrFlight": null,
        "rtnFlight": null,
        "altFlight": null,
        "servicedFlight": 10,
        "servicingFlight": 0,
        "nextTwoHoursFlight": null,
        "warnedFlight": null,
        "completionRate": 4.7
    }
  }
))
