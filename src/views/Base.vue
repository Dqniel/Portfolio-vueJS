<template>
  <workPageComponent :works="works"/>
</template>

<script>
  import workPageComponent from '@/components/work-page-pattern/work-page.component.vue'
  export default {
    name: 'base',
    components: {
      workPageComponent
    },
    data(){
      return {
        works: [
          {
            'name': 'Base',
            'section_class': 'w1b',
            'images': [
              {'image': 'base_1.png'},
              {'image': 'base_2.png'},
              {'image': 'base_3.png'},
              {'image': 'base_4.png'},
              {'image': 'base_5.png'}
            ],
            'client': 'Base',
            'role': 'UI & Front-end',
            'date': '2017',
            'href': 'http://www.base.be',
            'description': 'Base\'s website, powered by AEM, AngularJS, and LESS',
            'next_class': 'w2',
            'next_link': 'jim',
            'next_label': 'Jim mobile website'
          }
        ]
      }
    }
  }
</script>
