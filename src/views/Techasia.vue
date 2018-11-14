<template>
  <workPageComponent :works="works"/>
</template>

<script>
  import workPageComponent from '@/components/work-page-pattern/work-page.component.vue'
  export default {
    name: 'techasia',
    components: {
      workPageComponent
    },
    data(){
      return {
        works: [
          {
            'name': 'Techasia',
            'section_class': 'w3',
            'images': [
              {'image': 'techasia2_1000_500.jpg'},
              {'image': 'techasia_1000_500.jpg'}
            ],
            'client': 'Techasia',
            'role': 'Design & code',
            'date': '2015',
            'href': null,
            'description': 'Techasia wants to be the french speaking blog reference for high-tech.\n' +
            '        I used the Flexbox css display for this site, the back end is done with drupal.',
            'next_class': 'w4',
            'next_link': 'old-portfolio',
            'next_label': 'Portfolio Daniel Bodi'
          }
        ]
      }
    }
  }
</script>
