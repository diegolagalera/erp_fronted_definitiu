<template>
  <div id="particles-js" class="absolute top-0 left-0 z-0">
    <div class="absolute right-0 ml-6 z-50 mr-4 mt-2 ">
      <ConfigSelectLanguage></ConfigSelectLanguage>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const { locale } = useI18n()
let showSelectLanguage = ref(false)

onMounted(() => {
  particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
})

</script>
<style>
/* ---- reset ---- */

body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: bottom;
  z-index: 0;
}

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #666666; */
  /* background: linear-gradient(#440404, #1c0d70); */
  /* background-image: url(""); */
  background-image: linear-gradient(#c9c8c8, #21383d);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
}

/* ---- stats.js ---- */

.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles {
  font-size: 1.1em;
}

#stats,
.count-particles {
  -webkit-user-select: none;
}

#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>