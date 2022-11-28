<template>
  <div>
    <Journal />
  </div>
</template>

<script>
  import Journal from './widgets/Journal.vue'
  import API from '@/api';

  export default {
    name: 'Dashboard',
    components: {
      Journal,
    },

    data(){
        return{
          diaries : [],
          thedate : new Date().toISOString().split('T')[0]
        }
    },

    async created() {
        const response = await API.getJournalsByDate(this.thedate);
        // const response = await API.getAllPosts()
        this.diaries = response;
        // console.log(this.diaries)
        // console.log(this.thedate)
    },
  }


</script>
