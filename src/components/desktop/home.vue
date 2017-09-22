<template>
  <div class="home">
    <div class='nav-bar'>
      <nav class='m-nav'>
        <a href="/#/" class='logo'></a>
        <ul class="m-nav-bar">
          <li class='m-nav-item'><a href="/#/" class='m-item-link active'>发现音乐</a></li>
          <li class='m-nav-item'><a href="/#/" class='m-item-link'>我的音乐</a></li>
          <li class='m-nav-item'><a href="/#/" class='m-item-link'>朋友</a></li>
          <li class='m-nav-item'><a href="/#/" class='m-item-link'>商城</a></li>
          <li class='m-nav-item'><a href="/#/" class='m-item-link'>音乐人</a></li>
          <li class='m-nav-item'>
            <a href="" class='m-item-link'>下载客户端</a>
            <span class='hot'>HOT</span>
          </li>
        </ul>
        <input type="" name="" placeholder="音乐/电台/用户" class='search' />
        <a class='video-upload' href="/#/">视频投稿</a>
        <div class='login-container' v-on:mouseenter="showLoginBar()" v-on:mouseleave="hideLoginBar()">
          <a class="login" href='/#/'>登录</a>
          <ul class='login-bar hidden'>
            <li>
              <span class='login-logo phone'></span>
              <a href="/#/" class='login-item'>手机号登录</a>
            </li>
            <li>
              <span class='login-logo wechart'></span>
              <a href="/#/" class='login-item wechart'>微信登录</a>
            </li>
            <li>
              <span class='login-logo qq'></span>
              <a href="/#/" class='login-item qq'>QQ登录</a>
            </li>
            <li>
              <span class='login-logo sina'></span>
              <a href="/#/" class='login-item sina'>新浪微博登录</a>
            </li>
            <li>
              <span class='login-logo m-163'></span>
              <a href="/#/" class='login-item m-163'>网易邮箱账号登录</a>
            </li>
          </ul>
        </div>
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
        let item = document.getElementsByClassName('active');
      },
      showLoginBar: function() {
        let bar = document.getElementsByClassName('login-bar')[0];
        bar.className = bar.className.replace(' hidden', '');
      },
      hideLoginBar: function() {
        let bar = document.getElementsByClassName('login-bar')[0];
        bar.className = bar.className + ' hidden';
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
    width: 1200px;
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
  .m-nav-bar {
    display: inline-block;
  }
  .m-nav .m-item-link {
    float: left;
    height: 70px;
    padding: 0 19px;
    line-height: 70px;
    color: #ccc;
    font-size: 14px;
  }
  .active {
    background: #000;
    color: #fff !important;
  }
  .hot {
    float: right;
    width: 40px;
    height: 18px;
    margin-top: 20px;
    background: red;
    color: white;
    text-align: center;
    border-radius: 100px;
  }
  .search {
    display: inline-block;
    width: 128px;
    height: 28px;
    padding: 0 10px 0 30px;
    margin-left: 60px;
    border-radius: 100px;
    background: white url('http://s2.music.126.net/style/web2/img/frame/topbar.png?0507b9b7f40553706f853bcaf2141ab4') no-repeat 0 9999px;
    background-position: 0 -99px;
  }
  .video-upload {
    display: inline-block;
    width: 90px;
    height: 32px;
    margin-left: 20px;
    text-align: center;
    color: #ccc;
    background: url('http://s2.music.126.net/style/web2/img/frame/topbar.png?0507b9b7f40553706f853bcaf2141ab4') no-repeat 0 9999px;
    background-position: 0 -140px;
    text-indent: 20px;
    line-height: 32px;
  }
  .video-upload:hover {
    background-position: -100px -140px;
  }
  .login-container {
    display: inline-block;
    position: relative;
    margin-left: 20px;
    padding-right: 20px;
    background: url('http://s2.music.126.net/style/web2/img/frame/topbar.png?0507b9b7f40553706f853bcaf2141ab4') no-repeat 0 9999px;
    background-position: right -54px;
  }
  .login {
    color: #787878;
  }
  .login-bar {
    position: absolute;
    top: 31px;
    left: -42px;
    width: 158px;
    background: #2b2b2b;
  }
  .login-item {
    padding-left: 24px;
    line-height: 39px;
    color: #ccc;
  }
  .login-logo {
    float: left;
    width: 18px;
    height: 18px;
    margin: 10px -15px 0 10px;
    background: url('http://s2.music.126.net/style/web2/img/frame/toplist.png?76aafd98d67c8d3f29211faca418e469') no-repeat;
  }
  .phone { background-position: -1px 0; }
  .wechart { background-position: -22px -20px; }
  .qq { background-position: -20px -40px; }
  .sina { background-position: 0 -22px; }
  .m-163 { background-position: 0 -42px; }
</style>
