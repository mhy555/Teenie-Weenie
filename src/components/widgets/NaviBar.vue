<template>
  <nav class="nav-bar">
    <a v-link="{ path: '/' }"><div class="logo"></div></a>
    <div class="navi-item-container">
      <a v-link="{ path: '/' }"><div class="navi-item">Home</div></a>
      <a v-link="{ path: '/video' }"><div class="navi-item">Video</div></a>
      <a v-link=" { path: '/picture' }"><div class="navi-item">Picture</div></a>
      <a v-link=" { path: '/game' }"><div class="navi-item">Games</div></a>
      <a v-link=" { path: '/about' }"><div class="navi-item">About Me</div></a>
    </div>
  </nav>
</template>

<script>
  export default {
    components: {
    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    attached() {

    },
    ready() {
    }
  }
</script>

<style lang="sass">
  .nav-bar {
    position: relative;
    width: 100%;
    height: 100px;
    color: white;
    text-align: center;
    padding: 10px;
    background: orange;
    .logo {
      position: absolute;
      top: 50%;
      margin-top: -35px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      background: url('../../assets/weenie-small.jpg') no-repeat center;
      background-size: 100% 100%;
    }
    .navi-item-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      height: 80px;
      padding-left: 90px;
      a {
        border-radius: 5px;
        flex: 1;
        &:hover {
          background: red;
          .navi-item {
            color: orange;
          }
        }
      }
      .navi-item {
        display: inline-block;
        font-size: 32px;
        color: red;
        line-height: 80px;
      }
    }
  }
</style>