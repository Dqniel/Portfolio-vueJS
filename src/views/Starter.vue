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
            'name': 'Starter',
            'section_class': 'w5',
            'images': [
              {'image': 'starter1_1000_500.jpg'},
              {'image': 'starter2_1000_500.jpg'},
              {'image': 'starter3_1000_500.jpg'},
              {'image': 'starter4_1000_500.jpg'},
              {'image': 'starter5_1000_500.jpg'},
              {'image': 'starter6_1000_500.jpg'},
              {'image': 'starter7_1000_500.jpg'}
            ],
            'client': 'AE Starter',
            'role': 'Design & code',
            'date': '2015',
            'href': null,
            'description': 'For the refresh of the driving school Starter\'s web site,  \n' +
            '     I choosed to work with the Flexbox display method and a home made left push menu',
            'next_class': 'w1',
            'next_link': 'base',
            'next_label': 'Base\'s website'
          }
        ]
      }
    }
  }
</script>
