<template>
  <h1>{{ title }}</h1>
  <span class="cursor" @click="setTimeFilter('all')">All</span> | 
  <span class="cursor" @click="setTimeFilter('upcoming')">Upcoming</span> 
  <MeetupCard 
    v-for="meetup in meetups"
    :key="meetup.id"
    :meetup="meetup"
    @meetup:deleted="removeMeetup"
  />
</template>

<script>
import MeetupCard from './MeetupCard'
export default {
  name: 'Home',

  props: {
    meetups: {
      type: Array,
      required: true
    }
  },

  emits: ['meetup:deleted'],

  methods: {
    removeMeetup(meetupId) {
      this.$emit('meetup:deleted', meetupId)
    } 
  },

  components: {
    MeetupCard
  }
}
</script>

<style>
  .cursor {
    cursor: pointer;
  }
</style>