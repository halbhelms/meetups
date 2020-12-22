<template>
  <MeetupList v-if="meetups.length" :meetups="meetups" @meetup:deleted="removeMeetup"/>
</template>

<script>
import { getMeetups } from '../services/APIservice'
import MeetupList from '../components/MeetupList'

export default {
  
  components: {MeetupList},
  
  data() {
    return {
      meetups: [],
    }
  },

  methods: {
    removeMeetup(meetupId) {
      this.meetups = this.meetups.filter( meetup => meetup.id !== meetupId)
    },

    testMethod(msg) {
      console.log('Here in testMethod', msg)
    }
  },

  provide() {
    return {
      testMethod: this.testMethod
    }
  },

  mounted() {
    getMeetups()
      .then( meetups => this.meetups = meetups.data)
      .catch(error => console.log(error))
  },

}
</script>

<style>

</style>
