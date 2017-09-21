<template>
  <div class="home">
    <div class='nav-bar'>
      <nav class='m-nav'>
        <a href="/#/" class='logo'></a>
        <ul>
          <li class='m-nav-item'>发现音乐</li>
          <li class='m-nav-item'>我的音乐</li>
          <li class='m-nav-item'>朋友</li>
          <li class='m-nav-item'>商城</li>
          <li class='m-nav-item'>音乐人</li>
          <li class='m-nav-item'>下载客户端</li>
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
    align-items: center;
    height: 70px;
    color: white;
  }
</style>
