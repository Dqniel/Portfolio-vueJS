<template>
  <section>
  <div class="load fadeInLeft work" v-for="work in works">
    <nav class="menu_top bg">
      <ul class="grid grid--alignMiddle grid--alignSpaceAround">
        <li>
          <router-link to="/">back to home</router-link>
        </li>
        <li><h2 class="titre">{{work.name}}</h2></li>
        <li>
          <router-link to="/about">About me & contact</router-link>
        </li>
      </ul>
    </nav>
    <swiper :options="swiperOption" ref="mySwiper" :class="[work.section_class + ' section swiper-container works']">
      <swiper-slide class="swiper-slide grid grid--alignCenter grid--alignMiddle" v-for="img in work.images">
        <img :src="require(`@/assets/images/${img.image}`)"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="role grid grid--alignSpaceAround grid--alignMiddle grid--noWrap">
      <span>Client: {{work.client}}</span>
      <span>Role : {{work.role}}</span>
      <span>Date: {{work.date}}</span>
    </div>
    <div class="contact grid grid--alignCenter grid--alignMiddle">
      <a v-if="work.href" target="_blank" class="btn" :href="work.href">
        Go to site
      </a>
      <div v-else class="not-online">
        Sorry but this website is no longer online  ¯\(◉‿◉)/¯
      </div>
    </div>
    <div class="prez">
      <div>
        <h2>Description</h2>
        <p>
          {{work.description}}
        </p>
      </div>
    </div>
    <div :class="[work.next_class + ' next grid grid--alignCenter grid--alignMiddle']">
      <div>
        <router-link :to="work.next_link">
          <h2>next project</h2>
          <h3>{{work.next_label}}</h3>
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      works: Array
    },
    name: 'workPageComponent',
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          direction: 'horizontal',
          slidesPerView: 1,
          keyboard: true,
          mousewheel: false,
          navigation: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  };
</script>

