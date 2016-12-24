<template>
    <div class="main-page">
      <div class="navi-bar-container">
        <navibar></navibar>
      </div>
      <div class="pic-box-container">
        <div class="last"><div class="arrow" @click="goPrePic"><</div></div>
        <div class="pic-box" :class="picture"></div>
        <div class="next"><div class="arrow" @click="goNextPic">></div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import navibar from './widgets/NaviBar.vue'

  export default {
    components: {
      navibar
    },
    props: {

    },
    data() {
      return {
        picNo: 0,
        picLength: 5
      }
    },
    computed: {
      picture() {
        console.log('picno', this.picNo)
        return "pic" + this.picNo;
      }
    },
    methods: {
      goPrePic() {
        if (this.picNo === 0) {
          this.picNo = this.picLength - 1;
        } else {
          this.picNo--;
        }
      },
      goNextPic() {
        if (this.picNo === this.picLength - 1) {
          this.picNo = 0;
        } else {
          this.picNo++;
        }
      }
    },
    attached() {
      var self = this;
      setTimeout(addPicNo, 10000)
      function addPicNo() {
        self.picNo++;
        setTimeout(addPicNo, 10000)
      }
    },
    ready() {
      
    }
  }
</script>

<style lang="sass">
.main-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .pic-box-container {
    position: relative;
    width: 100%;
    flex: 1;
    background: red;
    .last, .next {
      position: absolute;
      height: 100%;
      width: 10%;
      text-align: center;
      cursor: pointer;
    }
    .last {
      left: 0;
    }
    .pic-box {
      position: absolute;
      top: 0;
      left: 10%;
      width: 80%;
      height: 100%;
      // height: 250px;
      // margin-top: 10px;
      padding: 10px;
      text-align: center;
      &.pic0 {
        background: url('../assets/weenie-background.jpg') no-repeat center;
      }
      &.pic1 {
        background: url('../assets/weenie-background1.jpg') no-repeat center;
      }
      &.pic2 {
        background: url('../assets/weenie-background2.jpg') no-repeat center;
      }
      &.pic3 {
        background: url('../assets/weenie-background3.jpg') no-repeat center;
      }
      &.pic4 {
        background: url('../assets/weenie-background4.jpg') no-repeat center;
      }
      &.pic0, &.pic1, &.pic2, &.pic3, &.pic4 {
        background-size: 100% 100%;
      }
    }
    .next {
      right: 0;
    }
    .arrow {
      font-size: 32px;
      color: white;
      line-height: 1;
      position: relative;
      top: 50%;
      margin-top: -16px;
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
