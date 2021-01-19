<template>
  <v-card>
    <section id="wrapper" class="skewed">
      <div class="layer bottom">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Look Sharp</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
              ipsa accusamus quae neque tempora a, possimus, quibusdam nam totam
              omnis deserunt et dignissimos alias ab incidunt eveniet voluptate.
            </p>
          </div>
          <img
            :src="require('@/assets/images/webpieces/splitscreen/pc1.webp')"
          />
        </div>
      </div>
      <div class="layer top">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Stay Cool</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
              ipsa accusamus quae neque tempora a, possimus, quibusdam nam totam
              omnis deserunt et dignissimos alias ab incidunt eveniet voluptate.
            </p>
          </div>
          <img
            :src="require('@/assets/images/webpieces/splitscreen/pc2.webp')"
          />
        </div>
      </div>
      <div class="handle"></div>
    </section>
  </v-card>
</template>

<script>
// document.addEventListener('DOMContentLoaded', () => {
//   const wrapper = document.querySelector('#wrapper');
//   const topLayer = wrapper.querySelector('.top');
//   const handle = wrapper.querySelector('.handle');
//   let skew = 0,
//     delta = 0;

//   if (wrapper.className.indexOf('skewed') != -1) {
//     skew = 1000;
//   }

//   wrapper.addEventListener('mousemove', (e) => {
//     delta = (e.clientX - window.innerWidth / 2) * 0.5;

//     handle.style.left = `${e.clientX + delta}px`;
//     topLayer.style.width = `${e.clientX + skew + delta}px`;
//   });
// });

export default {
  data() {
    return {};
  },
  mounted() {
    const wrapper = document.querySelector("#wrapper");
    const topLayer = wrapper.querySelector(".top");
    const handle = wrapper.querySelector(".handle");
    let skew = 0,
      delta = 0;

    if (wrapper.className.indexOf("skewed") != -1) {
      skew = 1000;
    }

    wrapper.addEventListener("mousemove", e => {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;

      handle.style.left = `${e.clientX + delta}px`;
      topLayer.style.width = `${e.clientX + skew + delta}px`;
    });
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  line-height: 1.6;
  font-family: Arial, Helvetica, sans-serif;
}

#wrapper {
  position: relative;
  width: 100%;
  min-height: 55vw;
  overflow: hidden;
}

.layer {
  position: absolute;
  width: 100%;
  min-height: 55vw;
  overflow: hidden;
}

.layer .content-wrap {
  position: absolute;
  width: 75vw;
  min-height: 55vw;
}

.layer .content-body {
  width: 25%;
  position: absolute;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  color: white;
}

.layer img {
  position: absolute;
  width: 35%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.layer h1 {
  font-size: 2em;
}

.bottom {
  background-color: #222;
  z-index: 1;
}

.bottom .content-body {
  right: 5%;
}

.bottom h1 {
  color: #fdab00;
}

.top {
  z-index: 2;
  background-color: #eee;
  color: #222;
  width: 50vw;
}

.top .content-body {
  left: 5%;
  color: #222;
}

.handle {
  position: absolute;
  height: 200%;
  display: block;
  background-color: #fdab00;
  width: 8px;
  top: 0;
  left: 50%;
  z-index: 3;
}

.skewed .handle {
  top: 50%;
  /* background-color: #fdab00; */
  transform: rotate(30deg) translateY(-50%);
  height: 200%;
  /* overflow: hidden; */
  transform-origin: top;
}

.skewed .top {
  transform: skew(-30deg);
  margin-left: -1000px;
  width: calc(50vw + 1000px);
}

.skewed .top .content-wrap {
  transform: skew(30deg);
  margin-left: 1000px;
}
</style>
