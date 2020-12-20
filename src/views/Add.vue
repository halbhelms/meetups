<template>
  <h1>Add a Meetup</h1>
    <MeetupForm v-if="dataReady" :users="users" :categories="categories"/>
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