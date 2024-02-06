<template>
<div class="logos">
      <div class="logos-slide">
        <img src="../images/ariston.png" />
        <img src="../images/beretta.png" />
        <img src="../images/ferroli.png" />
        <img src="../images/lamborghini.png" />
        <img src="../images/riello.png" />
      </div>
      <div class="logos-slide">
        <img src="../images/ariston.png" />
        <img src="../images/beretta.png" />
        <img src="../images/ferroli.png" />
        <img src="../images/lamborghini.png" />
        <img src="../images/riello.png" />
      </div>
      <div class="logos-slide">
        <img src="../images/ariston.png" />
        <img src="../images/beretta.png" />
        <img src="../images/ferroli.png" />
        <img src="../images/lamborghini.png" />
        <img src="../images/riello.png" />
      </div>

      
    </div>
</template>

<script>
export default{}
</script>

<style scoped>

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  /* padding: 60px 0; */
  /* background: white; */
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: row;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before,
.logos:after {
  left: 0;
}

/* .logos:hover .logos-slide {
  animation-play-state: paused;
} */

.logos-slide {
  display: inline;
  animation: 25s slide infinite linear;
  display: flex;
  flex-direction: row;
}

.logos-slide img {
  height: 100px;
  margin: 0 40px;
  /* border-radius: 1000px; */
}
</style>