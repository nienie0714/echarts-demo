import api from '../api/api'
import { jsonCallback } from '../utils'
import Mock from 'mockjs'

// 查询机位使用情况
Mock.mock(api.queryPassenger.url, 'post', jsonCallback(
  {
    "code": 0,
    "msg": "success",
    "data": {
        "statDate": "2019-03-18 00:00:00",
        "checkinNum": "100",
        "verifyNum": "80",
        "boardNum": "60",
        "isolationNum": "20",
        "plannedTotalNum": "100"
    }
  }
))
'已值机', '已安检', '已登机', '隔离区', '计划出港'