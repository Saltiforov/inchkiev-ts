<template>
  <div class="leftBar__inner bar">
    <div class="bar__top">
      <router-link class="home__page-link" to="/"><i class="fas fa-home"></i></router-link>
      <button class="refresh__btn" @click="reloadPage"><i class="fas fa-sync-alt refresh"></i></button>
    </div>
    <div class="bar__options">
      <h4 class="bar__options-title">Параметри:</h4>
      <div class="medicine__count">
        <div class="medicine__count-item count__item" v-for="parameter in allParameters" :key="parameter.id">
          <img :src="require(`../assets/images/${parameter.path}`)" :alt="`${parameter.path}`">
          <p class="count__item-counter">{{ parameter.count }}</p>
        </div>
      </div>
    </div>
    <div class="bar__turn">
      <p>Осталось в очереди:</p>
      <span> {{ allPersons.length - queue }}/{{ allPersons.length }}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "LeftBar",
  computed: {
    ...mapGetters(['allPersons', 'allParameters'])
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  props: {
    queue: {
      type: Number,
      default: 1
    }
  }

}
</script>

<style lang="scss">
.bar {
  font-family: 'AvenirNextCyr-Regular';
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
  height: 100vh;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar__top {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

}

.bar__options {
  &-title {
    font-size: 36px;
    line-height: 44px;
    color: white;
    padding: 0 25px;
    margin: 0;
  }
}

.bar__turn {
  background-color: rgba(255, 255, 255, 0.15);
  text-align: center;
  font-size: 36px;
  line-height: 44px;
  color: white;
  letter-spacing: 0.02em;
}

.refresh__btn {
  border: none;
  position: relative;

  .refresh {
    position: absolute;
    left: 17px;
    top: 17px;
    font-size: 35px;
    color: #FFABB1;
  }
}

.home__page-link,
.refresh__btn {
  width: 70px;
  height: 70px;
  background-color: white;
  display: block;
  border-radius: 50%;
  display: block;
  cursor: pointer;
}

.home__page-link {
  position: relative;

  i {
    position: absolute;
    left: 12px;
    top: 12px;
    font-size: 40px;
    color: #FFABB1;
  }
}

.medicine__count {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &-item {
    background: #FFFFFF;
    box-shadow: 0 0 50px rgba(131, 42, 64, 0.4);
    border-radius: 40px;
    width: 190px;
    height: 80px;
    margin: 20px;
    display: flex;

    p {
      font-size: 48px;
      line-height: 59px;
      color: #424242;
      font-weight: bold;
      padding: 10px 0 0 20px;
      margin: 0;
    }

    img {
      padding: 10px;
    }

    .heart {
      padding-top: 17px;
    }
  }

}
</style>
