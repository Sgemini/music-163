<template>
  <div class="home">
    <div class='nav-bar'>
      <nav class='m-nav'>
        <a href="/#/" class='logo'></a>
        <ul>
          <li class='m-nav-item'><a href="/#/" class='m-item-link active'>发现音乐</a></li>
          <li class='m-nav-item'><a href="" class='m-item-link'>我的音乐</a></li>
          <li class='m-nav-item'><a href="" class='m-item-link'>朋友</a></li>
          <li class='m-nav-item'><a href="" class='m-item-link'>商城</a></li>
          <li class='m-nav-item'><a href="" class='m-item-link'>音乐人</a></li>
          <li class='m-nav-item'><a href="" class='m-item-link'>下载客户端</a></li>
        </ul>
      </nav>
      <nav class='s-nav'></nav>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      changActive: function() {
        let item = document.getElementsByClass('active');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*************************          nav         ************************************/
  .nav-bar {
    background-color: #242424;
  }
  .m-nav {
    width: 1100px;
    margin: 0 auto;
  }
  .logo {
    float: left;
    width: 176px;
    height: 70px;
    background: url('http://s2.music.126.net/style/web2/img/frame/topbar.png?0507b9b7f40553706f853bcaf2141ab4') no-repeat 0 9999px;
    background-position: 0 0;
  }
  .m-nav .m-nav-item {
    display: inline-flex;
    height: 70px;
  }
  
  .m-nav .m-item-link {
    float: left;
    height: 70px;
    padding: 0 19px;
    line-height: 70px;
    color: #ccc;
  }
  .active {
    background: #000;
    color: #fff !important;
  }
</style>
