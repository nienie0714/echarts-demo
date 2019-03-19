import api from '../api/api'
import { jsonCallback } from '../utils'
import Mock from 'mockjs'

// 查询机位使用情况
Mock.mock(api.queryStand.url, 'post', jsonCallback(
  {
    "code": 0,
    "msg": "success",
    "data": {
        "statDate": "2019-03-18 00:00:00",
        "totalStand": "16/38",
        "nearlyStand": "12/16",
        "farStand": "4/22",
        "disableStand": "0"
    }
  }
))
