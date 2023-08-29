import { MockMethod } from 'vite-plugin-mock'
import navMenu from './data/navMenu'
import captcha from "./data/captcha"
export default [
  {
    url:'/mock/navMenu',
    method:'post',
    response:() => {
      return {
        code:0,
        msg:'ok',
        data:navMenu,
      }
    },
  },
  {
    url:'/mock/captcha',
    method:'get',
    response:() => {
      return {
        code:0,
        msg:'ok',
        data:captcha,
        uuid:"JK932NNM#1234"
      }
    },
  },
]