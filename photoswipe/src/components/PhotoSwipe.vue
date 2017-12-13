<template>
  <div class="photoswipe-container">
      <div class="header"><img src="../../static/photoswipe/img/codecomputerlovelogo.gif"></div>
      <div class="titile">PhotoSwipe</div>
      <div class="main-container">
          <ul class="gallery">
              <li v-for="(item, index) in list" @click="$preview.open(index, listFull,{doubleTapSpeed:3000})"><a><img class="preview-img"  :src="item.src" height="100" ></a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "../../static/photoswipe/img/thumb/001.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/002.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/003.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/004.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/005.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/006.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/007.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/008.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/009.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/010.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/011.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/012.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/013.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/014.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/015.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/016.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/017.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/018.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/019.jpg",
        },
        {
          src: "../../static/photoswipe/img/thumb/020.jpg",
        }
      ],
      listFull: [
        {
          src: "../../static/photoswipe/img/full/001.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/002.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/003.jpg",
         w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/004.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/005.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/006.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/007.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/008.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/009.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/010.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/011.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/012.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/013.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/014.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/015.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/016.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/017.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/018.jpg",
          w: 584,
          h: 393
        },
        {
          src: "../../static/photoswipe/img/full/019.jpg",
          w: 393,
          h: 584
        },
        {
          src: "../../static/photoswipe/img/full/020.jpg",
          w: 584,
          h: 393
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style>

</style>
