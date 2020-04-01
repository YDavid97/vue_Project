<template>
  <div class="jobItem">
    <h1 v-text="itemObj.title"></h1>
    <p v-text="itemObj.h2_text"></p>
    <ul class="areaUI">
      <li v-for="(n,inx) in itemObj.area">{{ n }}</li>
    </ul>
    <label v-text="itemObj.hr.hr_txt"></label>
    <span v-text="itemObj.salary"></span>
  </div>
</template>

<script>
  export default {
    name: 'job_Item',
    data () {
      return {
        msg:'具体的职位列表',
      }
    },
    props:['itemObj']
  }
</script>

<style>
  .jobItem {
    padding: .3rem;
    border-bottom: .1rem solid #eaeaea;
    position: relative;
  }
  ul.areaUI {
    height: .3rem; margin: 0 0 .2rem .2rem;
  }
  ul.areaUI li {
    float: left;
    margin-right: .1rem;
    background: #F2F3F5;
    padding: .02rem .07rem;
    color: #666;
    font-size: .1rem;
  }
  .jobItem h1 {
    font-size: .25rem;
    font-weight: bold;
    margin: 0 0 .1rem .2rem;
  }
  .jobItem p {
    font-size: .2rem;
    color: #666;
    margin: 0 0 .1rem .2rem;
  }
  .jobItem label {
    font-size: .2rem;
    color: #666;
    margin: 0 0 .1rem .2rem;
  }
  .jobItem span {
    font-size: .25rem;
    color: #14c1bb;
    position: absolute;
    top: .3rem;
    right: .3rem;
  }
</style>
