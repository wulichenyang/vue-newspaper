<template lang="html">
  <!--主题日报的列表-->
  <div class="newspaper-wrap">
    <!--图片-->
    <figure class="detail-img-box" v-if="newsInfo.background" :style="{ backgroundImage: 'url(' + replaceUrl(newsInfo.background) + ')' }">
      <div class="detail-mask"></div>
      <h1 class="detail-title">{{newsInfo.description}}</h1>
      <p class="detail-image-source">{{newsInfo.image_source}}</p>
    </figure>
    <!--主编-->
    
    <!--列表-->
    <div class="list-box">
      <ul>
        <list-item v-for="item in newsInfo.stories" :item="item"></list-item>
      </ul>
    </div>

  </div>
</template>

<script>
import { fetchNewsInfo } from 'api/newspaper.js';


export default {
  name: 'newspaper',
  data () {
    return {
      newsInfo: {},
    }
  },
  methods: {
    initNews() {
      fetchNewsInfo(null, this.$route.params.id).then(res => {
        console.log(res)
        this.newsInfo = res;
      })
    },
    replaceUrl (str) {
      return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    }
  },
  created() {
    this.initNews();
    this.unwatch = this.$watch(() => this.$route.params.id, this.initNews.bind(this));
  },
  beforeDestory() {
    console.log('unwatch tableInfo');
    this.unwatch();
  },
}
</script>


<style lang="scss">
.newspaper-wrap {
  .detail-img-box {
      position: relative;
      z-index: 0;
      height: 230px;
      width: 100%;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    .detail-mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
      background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    }
    .detail-title{
      position: absolute;
      bottom: 23px;
      line-height: 1.2;
      left: 0;
      padding: 0 18px;
      font-weight: 300;
      font-size: 21px;
      color: #fff;
    }
    .detail-image-source {

    }
  }
}
</style>