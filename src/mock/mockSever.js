/**
 * Created by Administrator on 2017/9/25.
 */
import Mock from 'mockjs'
import apiData1 from './data1.json'
import apiData4 from './data4.json'
Mock.mock('/api/catnav', {code:"succeed", data:apiData1.menus})
Mock.mock('/api/details', {code:"succeed", data:apiData1.datas})
Mock.mock('/api/crazy', {code:"succeed", data:apiData4.data})



