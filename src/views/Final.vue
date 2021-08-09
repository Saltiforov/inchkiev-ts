<template>
  <section class="final">
    <div class="container">
      <div class="final__top">
        <router-link class="final__page-link" to="/" @click="refreshCount"><i class="fas fa-home"></i></router-link>
      </div>
      <div class="final__main ">
        <div class="final__main-grid grid">
          <div class="grid__item" v-for="(result,index) in allSales[0]" :key="result.id">
            <div class="grid__item-sum">{{ result }}%</div>
            <div class="grid__item-name">Препарат {{ index + 1 }}</div>
          </div>
        </div>
        <div class="final__main-result">
          <p class="final__main-sub">Ваш результат:</p>
          <blockquote class="final__main-blockquote">
            «Что я здесь делаю?»
          </blockquote>
          <p class="final__main-descr">Это тестовое задание, так что не будем <br> углубляться в глубины проблем
            фармацевтов. </p>
        </div>
        <router-link to="/about" class="final__main-link" @click="refreshCount">Попробовать еще</router-link>
        <div class="final__main-img">
          <img class="main__img" src="../assets/images/finish_img.jpg" alt="final__img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Final",
  methods: {
    refreshCount() {
      this.$store.commit("refreshCount");
    }
  },

  computed: {
    ...mapGetters(['allSales', 'allParameters'])
  }
}
</script>

<style lang="scss">
.main__img {
  position: absolute;
  right: 0;
  top: -30px;
  height: 600px;
}

.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
}

.final__main {
  font-family: 'AvenirNextCyr-Regular';
  width: 600px;

  &-result {
    margin-top: 30px;
    margin-left: 60px;
  }

  &-sub {
    color: #8E9AD5;
    font-size: 32px;
    line-height: 35px;
    letter-spacing: 0.02em;
  }

  &-blockquote {
    font-family: 'AvenirNextCyr-Bold';
    font-size: 32px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: #8E9AD5;
    margin: 15px;
  }

  &-descr {
    font-size: 24px;
    line-height: 29px;
    color: #424242;
  }

  &-link {
    font-family: 'AvenirNextCyr-Bold';
    font-size: 24px;
    line-height: 29px;
    display: block;
    width: 270px;
    padding: 15px 0;
    text-decoration: none;
    color: white;
    background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
    border-radius: 100px;
    text-align: center;
    margin-top: 100px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 0 15px;
  padding-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid #D9D9D9;
  color: #424242;

  &__item {
    &-sum {
      font-size: 48px;
      line-height: 59px;
    }

    &-name {
      font-size: 16px;
      line-height: 20px;
      padding-top: 10px;
      font-family: 'AvenirNextCyr-Bold';
    }
  }

}

.final__page-link {
  display: block;
  width: 70px;
  height: 70px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100px;
  position: relative;
  margin-top: 70px;

  i {
    font-size: 50px;
    color: white;
    position: absolute;
    left: 7px;
    top: 7px;
  }
}

@media (max-width: 770px) {
  .final__main {
    margin-top: 33%;
  }
  .main__img {
    height: 400px;
  }
}
</style>
