<template>
  <swiper :options="swiperOption" ref="mySwiper" class="main swiper-container">
      <swiper-slide v-for="(page, index) in pages"
               :class="['swiper-slide section w' + index, {'background_anim bg': index==0}]">
        <div class="bg_container" v-bind:class="{'bounceInDown': index==0}">
          <h3 class="titre" v-if="index==0">{{page.salute}}</h3>
          <h1 class="titre">{{page.section}}</h1>
          <h3 class="titre">{{page.description}}</h3>
          <router-link class="btn" :to="page.c2a_link">{{page.c2a_label}}</router-link>
        </div>
        <span class="titre scroll">
          <span></span>
          {{page.next_label}}
        </span>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>


  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: 'homeComponent',
    data() {
      return {
        pages: [
          {
            'section': 'Daniel',
            'salute': 'Hi! i\'m',
            'name': 'Daniel',
            'description': 'UI Designer & Developer',
            'c2a_label': 'about me',
            'c2a_link': 'about',
            'next_label': 'Scroll to see my work',
            'next_link': '#base'
          },
          {
            'section': 'base',
            'description': 'UI & front-end',
            'c2a_label': 'details',
            'c2a_link': 'base',
            'next_label': 'jimmobile.be',
            'next_link': '#jimmobile'
          },
          {
            'section': 'jim mobile',
            'description': 'UI & front-end',
            'c2a_label': 'details',
            'c2a_link': 'jim',
            'next_label': 'Techasia',
            'next_link': '#techasia'
          },
          {
            'section': 'techasia',
            'description': 'UI & front-end',
            'c2a_label': 'details',
            'c2a_link': 'techasia',
            'next_label': 'Old portfolio daniel bodi',
            'next_link': '#oldportfolio'
          },
          {
            'section': 'Daniel Bodi',
            'description': 'UI & front-end',
            'c2a_label': 'details',
            'c2a_link': 'old-portfolio',
            'next_label': 'Driving school starter',
            'next_link': '#starter'
          },
          {
            'section': 'starter',
            'description': 'UI & front-end',
            'c2a_label': 'details',
            'c2a_link': 'starter',
            'next_label': 'about me',
            'next_link': '#about'
          }
        ],
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          keyboard: true,
          mousewheel: true,
          navigation: {
            nextEl: '.swiper-button-next'
          },
          loop: true,
          grabCursor: true,
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

<style lang="scss">

</style>
