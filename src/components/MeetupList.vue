<template>
  <h1>{{ title }}</h1>
  <span class="cursor" @click="setTimeFilter('all')">All</span> | 
  <span class="cursor" @click="setTimeFilter('upcoming')">Upcoming</span> 
  <MeetupCard 
    v-for="meetup in meetups"
    :key="meetup.id"
    :meetup="meetup"
  />
</template>

<script>
import axios from 'axios'
import MeetupCard from './MeetupCard'
export default {
  name: 'Home',
  components: {
    MeetupCard
  },
  data() {
    return {
      meetups: Array,
      title: 'All Meetups'
    }
  },
  created() {
    axios.get('http://localhost:3000/meetups/?canceled=false')
      .then( meetups => this.meetups = meetups.data)
      .catch(error => console.log(error))
  },
  methods: {
    setTimeFilter(option) {
      this.title = "All Meetups"
      if (option === "all") {
        axios.get('http://localhost:3000/meetups/')
          .then( meetups => this.meetups = meetups.data)
          .catch(error => console.log(error))
      }

      if (option==="upcoming") {
        let allMeetups = null;
        let filteredArray = this.meetups
        axios.get('http://localhost:3000/meetups/')
          .then( (meetups) => {
            allMeetups = meetups.data
            filteredArray = allMeetups.filter( (meetup) => {
              return new Date(meetup.date) > new Date()
            })
            console.log('filteredArray', filteredArray)
            this.meetups = filteredArray
            this.title = "Upcoming Meetups"
          }
          )
          .catch(error => console.log(error))
        console.log(new Date('2022-07-12T00:00:00.000Z') - new Date('2010-07-13T00:00:00.000Z'))
      }
    }
  }
}
</script>

<style>
  .cursor {
    cursor: pointer;
  }
</style>