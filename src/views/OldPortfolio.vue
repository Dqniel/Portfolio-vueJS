<template>
  <workPageComponent :works="works"/>
</template>

<script>
  import workPageComponent from '@/components/work-page-pattern/work-page.component.vue'
  export default {
    name: 'old-portfolio',
    components: {
      workPageComponent
    },
    data(){
      return {
        works: [
          {
            'name': 'Daniel Bodi',
            'section_class': 'w4',
            'images': [
              {'image': 'dbg1_1000_500.jpg'},
              {'image': 'dbg2_1000_500.jpg'},
              {'image': 'dbg3_1000_500.jpg'},
              {'image': 'dbg4_1000_500.jpg'},
              {'image': 'dbg5_1000_500.jpg'}
            ],
            'client': 'my-self',
            'role': 'Design & code',
            'date': '2014',
            'href': 'http://www.danielbodigil.com/old',
            'description': 'The former version of my portfolio, done with css3 techniques like \n' +
            '     @support and flexbox display, and a parallax effect',
            'next_class': 'w5',
            'next_link': 'starter',
            'next_label': 'starter'
          }
        ]
      }
    }
  }
</script>
