<template>
  <div class="main-page">
    <div class="nav-bar">this is the navi bar</div>
    <div class="pic-box-container">
      <div class="pic-box">this is a pic box</div>
    </div>
    <button class="button" v-link="{name: 'test'}">click me!</div>
  </div>
</template>

<script>

</script>

<style lang="sass">
.main-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav-bar {
    width: 100%;
    height: 100px;
    background: red;
    color: white;
    text-align: center;
    padding: 10px;
  }
  .pic-box-container {
    position: relative;
    width: 100%;
    flex: 1;
    .pic-box {
      position: absolute;
      top: 0;
      left: 10%;
      width: 80%;
      height: 100%;
      // height: 250px;
      // margin-top: 10px;
      background: orange;
      padding: 10px;
      text-align: center;
    }
  }
  .button {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 80px;
    background: white;
    left: 50%;
    margin-left: -40px;
    text-align: center;
    line-height: 50px;
    border: none;
    &:active {
      background: #666666;
    }
  }
}
</style>
