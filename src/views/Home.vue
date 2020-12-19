<template>
  <MeetupList />
</template>

<script>
import MeetupList from '../components/MeetupList'
export default {
  components: {MeetupList},
  data() {
    return {
      meetups: [],
    }
  }
}
</script>

<style>

</style>
