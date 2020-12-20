<template>
  <div class="form">
    <!-- meetup.organizer -->
    <div class="input-control">
      <span class="label">Who are you?</span>
      <span class="form-control">
        <select name="user" :bind="meetup.organizer">
          <option value="0">Please choose a user</option>
          <option v-for="user in users" :key="user.id" :value="user.name">
            {{ user.name }}
          </option>
        </select>
      </span>
    </div>
    <!-- meetup.title -->
    <div class="input-control">
      <span class="label">Title:</span>
      <span class="form-control">
        <input type="text" v-model="meetup.title">
      </span>
    </div>
    <!-- meetup.description -->
    <div class="input-control">
      <span class="label">Description:</span>
      <span class="form-control">
        <input type="text" v-model="meetup.description">
      </span>
    </div>
    <!-- meetup.category -->
    <div class="input-control">
      <span class="label">Category:</span>
      <span class="form-control">
        <select name="category" :bind="meetup.category">
          <option value="0">Please choose a category</option>
          <option v-for="category in categories" :value="meetup.category" :key="category">{{ category }}</option>
        </select>
      </span>
    </div>
    <!-- meetup.date -->
    <div class="input-control">
      <span class="label">Date:</span>
      <span class="form-control">
        <input type="date" v-model="date">
      </span>
    </div>
    <!-- meetup.location -->
    <div class="input-control">
      <span class="label">Location:</span>
      <span class="form-control">
        <input type="text" v-model="meetup.location">
      </span>
    </div>
    <!-- meetup.time -->
    <div class="input-control">
      <span class="label">Time:</span>
      <span class="form-control">
        <input type="time" v-model="meetup.time">
      </span>
    </div>
    <!-- meetup.petsAllowed -->
    <div class="input-control">
      <span class="label">Pets Allowed?</span>
      <span class="form-control">
        <input type="checkbox" name="pets" value="true" v-model="meetup.petsAllowed">
        <label>Yes</label>
      </span>
    </div>
    <!-- meetup.bacciFriendly -->
    <div class="input-control">
      <span class="label">Baccy friendly?</span>
      <span class="form-control">
        <input type="checkbox" value="true" name="pets" v-model="meetup.bacciFriendly">
        <label>Yes</label>
      </span>
    </div>
    <!-- meetup.bacciFriendly -->
    <div class="input-control">
      <span class="label"></span>
      <span class="form-control">
        <button>Create the Meetup</button>  
      </span>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.$watch('date', (newVal) => {
      this.meetup.date = new Date(newVal)
    })
  },
  data() {
    return {
      date: null,
      meetup: {
        title: null,
        description: null,
        category: null,
        location: null,
        date: null,
        time: null,
        petsAllowed: false,
        bacciFriendly: true,
        organizer: null
      }
    }
  }
}
</script>

<style scoped>
  .label {
    width: 120px;
    margin-right: 12px;
    text-align: right;
  }
  .form-control {
    width: 200px;
    text-align: left;
    margin-bottom: 8px;
  }
  .input-control {
    width: 280px;
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  button {
    border: 1px solid cadetblue;
    border-radius: 12px;

  }

  button:hover {
    box-shadow: none;
    cursor: pointer;
    background-color: cadetblue;
    color:cornsilk;
    box-shadow: 6px 3px 3px teal;
  }
</style>
