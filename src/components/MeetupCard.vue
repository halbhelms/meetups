<template>
  <div class="card">
    <h3>{{ meetup.title }}</h3>
    <p>{{ meetup.description }}</p>
    <p>Location: {{ meetup.location }}</p>
    <p>Date: {{ formattedDate(meetup.date) }}</p>
    <p>Time: {{ meetup.time }}</p>
    <p>Pet-friendly: {{ meetup.petsAllowed ? "Sure" : "Sorry, no" }}</p>
    <p>Bacci-friendly: {{ meetup.bacciFriendly ? "Of course!" : "Please consider skipping this event as it is not bacci-friendly" }}</p>
  </div>
</template>

<script>
export default {
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    
    }
  },
  methods: {
    formattedDate(dateString) {
      let actualDate = new Date(dateString)
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(actualDate)
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(actualDate)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(actualDate)
      return `${mo} ${da}, ${ye}`
    }
  }
}
</script>

<style scoped>
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
</style>