<template>
  <h1>Edit a Meetup</h1>
  
  <MeetupForm :meetupToEdit="meetup" :users="users" :categories="categories" @meetup-edited="editMeetup"/>
</template>

<script>
import MeetupForm from '../components/MeetupForm'
import axios from 'axios'
import { updateMeetup } from '../services/APIservice'

export default {

  components: {
    MeetupForm
  },

  methods: {
    editMeetup(meetup) {
      updateMeetup(meetup)
        .then(this.$router.push({name: 'Home'}))
        .catch( error => console.log('Error', error))
    }
  },

  data() {
    return {
      meetup: null,
      users: null,
      categories: null
    }
  },

  created() {
    // Just a test
    // get meetup to edit
    axios.get(`http://localhost:3000/meetups/${this.$route.params.meetupId}`)
      .then( meetup => this.meetup = meetup.data)
      .catch( error => console.log('Error', error))
    
    // get all users
    axios.get('http://localhost:3000/users/?canceled=false')
      .then( users => this.users = users.data)
      .catch(error => console.log('error', error))
    
    // get all categories
    axios.get('http://localhost:3000/categories/')
      .then( categories => {
        this.categories = categories.data
        this.dataReady = true
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style>

</style>