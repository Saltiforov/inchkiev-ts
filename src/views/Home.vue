<template>
  <div class="home">
    <div class="welcome__page">
      <div class="welcome__page-inner">
        <p class="welcome__page-subtitle">Добро пожаловать в игру</p>
        <h2 class="welcome__page-title">Помоги <br> Фармацевту</h2>
        <router-link class="start" to="/about">Начать</router-link>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss">
.home {

  background-image: url(../assets/images/group.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}

.welcome__page {
  width: 660px;
  height: 660px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60px;
  left: 80px;
  color: #FFFFFF;

  &-subtitle {
    font-family: 'AvenirNextCyr-Light';
    font-size: 35px;
    line-height: 41px;
    color: #FFFFFF;
    letter-spacing: 0.02em;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  &-title {
    font-family: 'AvenirNextCyr-Bold';
    font-size: 60px;
    line-height: 66px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }
}

.start {
  font-family: 'AvenirNextCyr-Regular';
  width: 380px;
  padding: 20px 0 20px;
  background-color: white;
  border-radius: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #8E9AD5;
  text-decoration: none;
  display: block;
  text-align: center;
}
</style>
