/**
 * method:  默认post, [get,post,delete,put]
 * cache: 缓存接口数据， 默认false
 * isForm: 接口返回格式， 默认true 表示application/x-www-form-urlencoded, false表示application/json
 * url中加入:id，会拼接到url中，在调用接口的时候需要传入id:xxx
 */
let api = {
  getDeviceInfo: { url: 'getDeviceInfo' },
  getPortSize: { url: 'getPortSize' },
  getHJYHost: { url: 'api/v1/users' },
  topic: { url: 'api/v2/topics' },
  authCode: { url: 'api/v1/vcode', method: 'get' }, //获取短信验证码
  register: { url: 'api/v1/register' }, //手机号注册
  login: { url: 'api/v1/login' }, //手机号登陆
  forget: { url: 'api/v1/forget_password' }, //修改密码
  index: { url: 'api/v1/preset', method: 'get' }, //首页接口
  goods: { url: 'api/v1/goods', method: 'get' }, //获取商品列表
  series: { url: 'api/v1/series', method: 'get' }, //获取所有套系信息
  goodsDetail: { url: 'api/v1/goods/detail/:id', method: 'get' }, //获取商品详情
  cart: { url: 'api/v1/cart', method: 'get', isForm: true, cache: true }, //获取购物车的商品列表
  getUsers: { url: 'users', method: 'get' }
};

for (var k in api) {
  let urlHost = window.htp.apihost;
  let url = api[k].url;

  if (process.env.NODE_ENV === 'development') {
    urlHost = '/proxy/';
  }
  api[k].url = urlHost + url;
}

export default api;
