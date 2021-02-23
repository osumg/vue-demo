import Mock from 'mockjs';

Mock.mock('/account', {
  'data|20': [{
    'id|+1': 1,
    'name': '@cname',
    "age|18-28": 25,
    'address': '@county(true)'
  }]
})
