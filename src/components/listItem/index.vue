<template lang="html">
  1
</template>

<script>
import { fetchList } from 'api/newspaper.js';


export default {
  name: 'list-item'
  props: ['item'],
  data () {
    return {
      id: this.item.id
    }
  },
  attached () {
  },
  methods: {
    replace (str) {
      return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    }
  }
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