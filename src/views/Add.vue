<template>
  <h1>Add a Meetup</h1>
    <MeetupForm v-if="dataReady" :users="users" :categories="categories" @meetup-added="addMeetup"/>
</template>

<script>
import axios from 'axios'
import MeetupForm from '../components/MeetupForm'
export default {
  name: 'Add',
  data() {
    return {
      users: [],
      categories: [],
      dataReady: false
    }
  },
  components: {
    MeetupForm
  },
  methods: {
    addMeetup(meetup) {
      axios.post('http://localhost:3000/meetups/', meetup)
        .then(this.$router.push({name: 'Home'}))
    }
  },
  created() {
    axios.get('http://localhost:3000/users/?canceled=false')
      .then( users => this.users = users.data)
      .catch(error => console.log('error', error))
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