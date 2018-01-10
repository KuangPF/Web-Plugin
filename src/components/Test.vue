<template>
	<div class="slide-content" v-title="'slide-delete'">
        <div class="title">滑动删除</div>
		<div class="delete-content">
            <div class="slide-warp"  v-for="(item,index) in list" >
			<div class="slide-item" :style="item.txtStyle"
			@touchstart="onSlipTouchStart($event)"
			@touchmove="onSlipTouchMove($event)"
			@touchend="onSlipTouchEnd($event)"
			:data-index="index">
			{{item.text}}
			</div>
			<div class="slide-del" @click="onDeleteItem(index)">删除</div>
		</div>
        </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      /* eslint-disable */
      startX: 0, //  按下的位置
      moveX: 0, //   鼠标移动时水平方向的位置
      disX: 0, //	  移动之间的距离
      delWidth: 5.25,
      list: [
        {
          text: "左滑删除1",
          txtStyle: ""
        },
        {
          text: "左滑删除2",
          txtStyle: ""
        },
        {
          text: "左滑删除3",
          txtStyle: ""
        },
        {
          text: "左滑删除4",
          txtStyle: ""
        },
        {
          text: "左滑删除5",
          txtStyle: ""
        },
        {
          text: "左滑删除6",
          txtStyle: ""
        }
      ]
      /* eslint-enable */
    };
  },
  mounted() {},
  methods: {
    onSlipTouchStart(e) {
      if (e.touches.length === 1) {
        this.startX = e.touches[0].clientX;
      }
    },
    onSlipTouchMove(e) {
      let idx = e.currentTarget.dataset.index;
      let list = this.list;
      if (e.touches.length === 1) {
        let txtStyle = '';
        // 手指移动结束后的水平位置
        let endX = event.changedTouches[0].clientX;
        // 触摸开始与结束,手指移动的距离
        let disX = this.startX - endX;
        console.log(list[idx].txtStyle);
        console.log(disX);
        if (disX < 0) {
          /* if (disX < -84) {
            txtStyle = "left:" + 0 + "px";
          } else {
            disX = -84 - disX;
            txtStyle = "left:" + disX + "px";
          } */
        } else if (disX > 0) {
          if (disX > 84) {
            disX = 84;
          }
          txtStyle = 'left:-' + disX + 'px';
        }
        list[idx].txtStyle = txtStyle;
      }
    },
    onSlipTouchEnd(e) {
      if (event.changedTouches.length === 1) {
        // 手指移动结束后的水平位置
        let endX = event.changedTouches[0].clientX;
        // 触摸开始与结束,手指移动的距离
        let disX = this.startX - endX;
        let delWidth = this.delWidth;

        // 如果距离小于删除按钮的1/2，不显示删除按钮
        let txtStyle =
          disX > delWidth / 2 ? 'left:-' + delWidth + 'rem' : 'left:0';
        // 获取手指触摸的是哪一项
        let idx = event.currentTarget.dataset.index;
        let list = this.list;
        if (list[idx].txtStyle === 'left:0px') {
          localStorage.clear('slideRight');
        }
        list[idx].txtStyle = txtStyle;
      }
    },
    onDeleteItem(index) {
      this.list.splice(index, 1);
      this.$emit('on-change', this.list);
    }
  }
};
</script>
<style scoped>

</style>
