<template>
  <div class="scrolllinkage-container">
      <div class="header">滚动联动监听</div>
      <div class="content">
          <div class="left-wrap" ref="leftWarp">
              <div>
                  <div class="left-item" v-for="(item,index) in leftItemList" @click="selectMenu(index,$event)" ref="leftItemList" :class="{'current':currentIndex === index}">{{index+1}}-{{item}}</div>
              </div>
          </div>
          <div class="right-wrap" ref="rightWarp">
              <div>
                  <div class="right-item" v-for="(item,index) in rightItemList" ref="rightItemList">
                      <div class="title">{{item.name}}</div>
                      <div class="detail">
                          <div class="detail-content" v-for="(item,index) in item.detail">{{item}}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      leftItemList: [
        "左1",
        "左2",
        "左3",
        "左4",
        "左5",
        "左6",
        "左7",
        "左8",
        "左9",
        "左10"
      ],
      rightItemList: [
        { name: "右1", detail: ["右1-1", "右1-2", "右1-3", "右1-4", "右1-5"] },
        { name: "右2", detail: ["右2-1", "右2-2", "右2-3", "右2-4", "右2-5"] },
        { name: "右3", detail: ["右3-1", "右3-2", "右3-3", "右3-4", "右3-5"] },
        { name: "右4", detail: ["右4-1", "右4-2", "右4-3", "右4-4", "右4-5"] },
        { name: "右5", detail: ["右5-1", "右5-2", "右5-3", "右5-4", "右5-5"] },
        { name: "右6", detail: ["右6-1", "右6-2", "右6-3", "右6-4", "右6-5"] },
        { name: "右7", detail: ["右7-1", "右7-2", "右7-3", "右7-4", "右7-5"] },
        { name: "右8", detail: ["右8-1", "右8-2", "右8-3", "右8-4", "右8-5"] },
				{ name: "右9", detail: ["右9-1", "右9-2", "右9-3", "右9-4", "右9-5","右9-6", "右9-7", "右9-8", "右9-1", "右9-10"] },
				{ name: "右10", detail: ["右10-1", "右10-2", "右10-3", "右10-4", "右10-5","右10-6", "右10-7", "右10-8", "右10-1", "右10-10"] }
      ],
      listHeight: [],
      scrollY: ""
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
			return 0;
    }
  },
  mounted() {
    this._initScroll();
    this._calculateHeight();
  },
  methods: {
    _initScroll() {
      this.leftWarp = new Bscroll(this.$refs.leftWarp, {
        click: true //better-scroll 默认会阻止浏览器的原生 click 事件
      });
      this.rightWarp = new Bscroll(this.$refs.rightWarp, {
        click: true, //better-scroll 默认会阻止浏览器的原生 click 事件
        probeType: 3
      });

      this.rightWarp.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      let rightItemList = this.$refs.rightItemList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < rightItemList.length; i++) {
        let item = rightItemList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
		selectMenu(index,event) {
			if(!event._constructed) {
				return;
			}
			let rightItemList = this.$refs.rightItemList;
			let el = rightItemList[index];
			this.rightWarp.scrollToElement(el, 300);
		}
  }
};
</script>

<style>

</style>
