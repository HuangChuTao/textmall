import {request1} from './request';

export function getDetail(iid) {
  return request1({
      url: 'detail',
      params: {
          iid
      }
  })
}


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class Params {
  constructor(info, rule) {
    this.image = info.image ? info.image[0] : ""
    this.set = info.set
    this.tables = rule.tables
  }
}


export function getRecommend() {
  return request1({
    url: 'recommend'
  })
}