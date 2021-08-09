<template>
  <section class="about">
    <left-bar :queue="this.count"/>
    <div class="about__inner main">
      <div :class="`main__cart main__cart-${index}`" v-for="(person,index) in allPersons" :key="person.id"
           @mousedown="swipeCart(index)"
      >
        <template v-if="index === counter()">
          <img class="main__cart-img" :src="require(`../assets/images/${person.img}`)" draggable="false"
               alt="person-img">
          <div class="main__cart-inner">
            <h4 class="main__cart-name">{{ person.name + ',' }} {{ person.age + ' років' }}</h4>
            <p class="main__cart-inquiry">{{ person.descr }}</p>
          </div>
        </template>
      </div>

      <div class="medicine__btns">
        <div v-for="(tab,index) in allTabs" :key="tab.id">
          <button class="medicine" :class="`medicine-${index + 1}`" @click="nextStep(tab.id)">{{
              tab.name
            }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeftBar from "@/components/LeftBar";
import {mapGetters} from 'vuex'

import * as Hammer from 'hammerjs'

export default {
  components: {LeftBar},
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['allPersons', 'allTabs'])
  },
  watch() {

  },
  methods: {
    swipeCart(idx) {
      const th = this
      const cart = document.querySelector(`.main__cart-${idx}`);
      const mc = new Hammer(cart);
      mc.get('swipe').set({direction: Hammer.DIRECTION_ALL})
      mc.on("swipeleft", function () {
        th.nextStep(0)
      });

      mc.on("swiperight", function () {
        th.nextStep(2)
      });

      mc.on("swipeup", function () {
        th.nextStep(1)
      });

    },
    nextStep(id) {
      this.count++;
      console.log('id', id)
      this.$store.commit("salesItem", id);
      this.count === 5 ? this.$store.commit("selesResult") : ''
      this.counter();
    },
    counter() {
      return (this.count <= 4) ? this.count :
          (this.count === 5) ? this.$router.push('/final') : this.count = 0;
    }
  }
}
</script>
<style lang="scss">
.main {
  width: 100%;
  position: relative;
}

.main__cart {
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}

.about {
  width: 100%;
  height: 400px;
  display: flex;
  font-family: 'AvenirNextCyr-Regular';
  touch-action: manipulation;
}

.main__cart {
  width: 540px;
  background: #FFFFFF;
  box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;
  margin: 30px auto 0;


  &-img {
    height: 350px;
  }

  &-name {
    margin: 0;
    color: #8E9AD5;
    font-family: 'AvenirNextCyr-Bold';
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 10px;
  }

  &-inner {
    padding: 15px 50px 30px;
    margin: 0;
    min-height: 125px;
    user-select: none;
  }
}

.medicine__btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
}

.medicine {
  width: 280px;
  height: 90px;
  border-radius: 100px;
  font-size: 28px;
  line-height: 34px;
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'AvenirNextCyr-Bold';
}

.medicine-1 {
  background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
}

.medicine-2 {
  background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
}

.medicine-3 {
  background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
}

@media (max-width: 770px) {
  .about {
    height: 100%;
    flex-direction: column-reverse;
  }
  .main__cart-img {
    height: 290px;
  }
  .main__cart {
    width: 448px;
  }
  .medicine__btns {
    margin: 50px auto 0;
  }
  .bar {
    height: 100%;
    margin-top: 53px;
  }
  .medicine {
    width: 220px;

  }
}

@media (max-width: 415px) {
  .medicine__btns {
    flex-direction: column;
    display: none;
  }
  .about {
    flex-direction: column-reverse;
  }
  .main {
    margin: 0 25%;
  }
  .bar {
    margin-top: 29px;
  }
  .main__cart {
    margin: 0 10px;
    width: 300px;

    &-name {
      font-size: 18px;
      line-height: 20px;
    }

    &-inner {
      padding: 5px 20px;
      min-height: 140px;
    }

    &-img {
      height: 195px;
    }
  }

}
</style>
