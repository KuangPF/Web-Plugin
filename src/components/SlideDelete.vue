<template>
	<div class="slide-content" v-title="'slide-delete'">
        <div class="title">滑动删除</div>
		<div class="delete-content">
            <div class="slide-warp"  v-for="(item,index) in list" ref="slideWarp" >
				<div class="slide-item" :data-index="index">{{item.text}}</div>
				<div class="slide-del" @click="onDeleteItem(index)">删除</div>
			</div>
        </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      startX: 0, //  按下的位置
      moveX: 0, //   鼠标移动时水平方向的位置
      disX: 0, //	  移动之间的距离
      delWidth: 5.25,
      list: [
        {
          text: "左滑删除1"
        },
        {
          text: "左滑删除2"
        },
        {
          text: "左滑删除3"
        },
        {
          text: "左滑删除4"
        },
        {
          text: "左滑删除5"
        },
        {
          text: "左滑删除6"
        },
        {
          text: "左滑删除7"
        },
        {
          text: "左滑删除8"
        },
        {
          text: "左滑删除9"
        },
        {
          text: "左滑删除10"
        }
      ]
    };
  },
  mounted() {
    this._initSlideDelete();
  },
  methods: {
    _initSlideDelete() {
      let initX; //触摸位置
      let moveX; //滑动时的位置
      let X = 0; //移动距离
      let objX = 0; //目标对象位置
      window.addEventListener("touchstart", function(event) {
        let obj = event.target.parentNode;
        if (obj.className == "slide-warp") {
          initX = event.targetTouches[0].pageX;
          objX =
            obj.style.WebkitTransform
              .replace(/translateX\(/g, "")
              .replace(/px\)/g, "") * 1;
        }
        if (objX == 0) {
          window.addEventListener("touchmove", function(event) {
            let obj = event.target.parentNode;
            if (obj.className == "slide-warp") {
              moveX = event.targetTouches[0].pageX;
              X = moveX - initX;
              if (X >= 0) {
                obj.style.WebkitTransform = "translateX(" + 0 + "px)";
              } else if (X < 0) {
                let l = Math.abs(X);
                obj.style.WebkitTransform = "translateX(" + -l + "px)";
                if (l > 80) {
                  l = 80;
                  obj.style.WebkitTransform = "translateX(" + -l + "px)";
                }
              }
            }
          });
        } else if (objX < 0) {
          window.addEventListener("touchmove", function(event) {
            let obj = event.target.parentNode;
            if (obj.className == "slide-warp") {
              moveX = event.targetTouches[0].pageX;
              X = moveX - initX;
              if (X >= 0) {
                let r = -80 + Math.abs(X);
                obj.style.WebkitTransform = "translateX(" + r + "px)";
                if (r > 0) {
                  r = 0;
                  obj.style.WebkitTransform = "translateX(" + r + "px)";
                }
              } else {
                //向左滑动
                obj.style.WebkitTransform = "translateX(" + -80 + "px)";
              }
            }
          });
        }
      });
      window.addEventListener("touchend", function(event) {
        let obj = event.target.parentNode;
        if (obj.className == "slide-warp") {
          objX =
            obj.style.WebkitTransform
              .replace(/translateX\(/g, "")
              .replace(/px\)/g, "") * 1;
          if (objX > -40) {
            obj.style.WebkitTransform = "translateX(" + 0 + "px)";
            objX = 0;
          } else {
            obj.style.WebkitTransform = "translateX(" + -80 + "px)";
            objX = -80;
          }
        }
      });
    },
    onDeleteItem(index) {
      if (this.$refs.slideWarp[index])
        this.$refs.slideWarp[index].style.WebkitTransform =
          "translateX(" + 0 + "px)";
      this.list.splice(index, 1);
      this.$emit("on-change", this.list);
    }
  }
};
</script>
<style scoped>

</style>