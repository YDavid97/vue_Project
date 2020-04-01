<template>
  <div>
    <van-nav-bar class="bar_sty" left-text="标题">
      <van-icon name="plus" slot="right" />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="title_menu">
      <van-button class="minBtn" size='mini'>推荐</van-button>
      <van-button class="minBtn" size='mini'>最新</van-button>

      <van-button class="filterBtn" size='mini'>推荐</van-button>
      <van-button class="filterBtn" size='mini'>最新</van-button>
    </div>

    <!-- 职位列表 -->
    <div>
      <job_Item v-for="(n,inx) in jobsData" :key=inx :itemObj=n></job_Item>
    </div>
  </div>
</template>

<script>
import job_Item from './job_Item.vue'
export default {
  name: 'index_jobList',
  components: {job_Item},
  data () {
    return {
      msg: '职位列表',
      jobsData:[{
        title:'WEB前端',
        h2_text:'天使轮科技 未融资',
        area:['沈阳 和平区','经验不限','本科'],
        hr:{
          img_avatar:'',
          hr_txt:'孩子-招聘者'
        },
        salary:'5-6k'
      },{
        title:'WEB前端',
        h2_text:'天使轮科技 未融资',
        area:['沈阳 和平区','经验不限','本科'],
        hr:{
          img_avatar:'',
          hr_txt:'孩子-招聘者'
        },
        salary:'5-6k'
      },{
        title:'WEB前端',
        h2_text:'天使轮科技 未融资',
        area:['沈阳 和平区','经验不限','本科'],
        hr:{
          img_avatar:'',
          hr_txt:'孩子-招聘者'
        },
        salary:'5-6k'
      },{
        title:'WEB前端',
        h2_text:'天使轮科技 未融资',
        area:['沈阳 和平区','经验不限','本科'],
        hr:{
          img_avatar:'',
          hr_txt:'孩子-招聘者'
        },
        salary:'5-6k'
      },{
        title:'WEB前端',
        h2_text:'天使轮科技 未融资',
        area:['沈阳 和平区','经验不限','本科'],
        hr:{
          img_avatar:'',
          hr_txt:'孩子-招聘者'
        },
        salary:'5-6k'
      }
      ]
    }
  },

}
</script>

<style>
.bar_sty {
  background: #14c1bb;
}
.minBtn {
  border: 0;
  margin: .1rem 0 0;
}
.filterBtn {
  float: right;
  border: 0;
  margin: .1rem .1rem 0 0;
  background: #f2f3f5;
}
.title_menu {
  background: #fff;
}
</style>
