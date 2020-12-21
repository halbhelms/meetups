<template>
  <div class="card">
    <div id="header">
      <h3>{{ meetup.title }}</h3>
      <img src="../assets/edit.jpeg" width="16" @click="edit(meetup)">
      <img src="../assets/delete.jpeg" width="16" @click="remove(meetup.id)">
    </div>
    <p>{{ meetup.description }}</p>
    <p>Location: {{ meetup.location }}</p>
    <p>Date: {{ formattedDate(meetup.date) }}</p>
    <p>Time: {{ meetup.time }}</p>
    <p>Pet-friendly: {{ meetup.petsAllowed ? 'Sure!' : 'Sorry, no'}}</p>
    <p>Bacci-friendly: {{ meetup.bacciFriendly ? "Of course!" : "Please consider skipping this event as it is not bacci-friendly" }}</p>
  </div>
</template>

<script>
import { deleteMeetup } from '../services/APIservice'

export default {
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  emits: ['meetup:deleted'],

  methods: {
    formattedDate(dateString) {
      if (!dateString) {return "No date provided"}
      let actualDate = new Date(dateString)
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(actualDate)
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(actualDate)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(actualDate)
      return `${mo} ${da}, ${ye}`
    },

    edit(meetup) {
      this.$router.push( {name: 'Edit', params:{ meetupId: meetup.id } } )
    },

    remove(meetupId) {
      deleteMeetup(meetupId)
        .then( () => {
          this.$emit('meetup:deleted', meetupId)
        } )
        .catch( error => console.log('error', error) )
    }
  }
}
</script>

<style scoped>
  #header {
    display: grid;
    grid-template-columns: 80% 10% 10%
  }

  .card {
    border: 1px solid navy;
    margin-bottom: 6px;
    width: 300px;
    margin: auto;
    margin-bottom: 8px;
    padding: 6px;
  }

  p{
    text-align: left;
  }

  img {
    margin-top: 20px;
    cursor: pointer;
  }
</style>