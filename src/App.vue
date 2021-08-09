<template>
    <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
@font-face {
  font-family: 'AvenirNextCyr-Regular';
  src: url('~@/assets/fonts/AvenirNextCyr/AvenirNextCyr-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyr-Light';
  src: url('~@/assets/fonts/AvenirNextCyr/AvenirNextCyr-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyr-Bold';
  src: url('~@/assets/fonts/AvenirNextCyr/AvenirNextCyr-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

body{
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
}
</style>
