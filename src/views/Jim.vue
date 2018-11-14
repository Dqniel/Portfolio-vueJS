<template>
  <workPageComponent :works="works"/>
</template>

<script>
  import workPageComponent from '@/components/work-page-pattern/work-page.component.vue'
  export default {
    name: 'jim',
    components: {
      workPageComponent
    },
    data(){
      return {
        works: [
          {
            'name': 'Jim mobile',
            'section_class': 'w2',
            'images': [
              {'image': 'jim_1.png'},
              {'image': 'jim_2.png'},
              {'image': 'jim_3.png'},
              {'image': 'jim_4.png'}
            ],
            'client': 'Jim mobile',
            'role': 'UI & Front-end',
            'date': '2016',
            'href': 'http://www.jimmobile.be',
            'description': 'Jim mobile\'s website, powered by AEM, AngularJS, and LESS',
            'next_class': 'w3',
            'next_link': 'techasia',
            'next_label': 'Techasia'
          }
        ]
      }
    }
  }
</script>
