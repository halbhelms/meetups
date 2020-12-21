<template>
  {{ meetup }}
  <div class="form">
    <!-- meetup.organizer -->
    <div class="input-control">
      <span class="label">Who are you?</span>
      <span class="form-control">
        <select v-model="meetup.organizer">
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
        <select v-model="meetup.category">
          <option value="0">Please choose a category</option>
          <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
        </select>
      </span>
    </div>
 
    <!-- meetup.datetime -->
    <div class="input-control">
      <span class="label">Date:</span>
      <span class="form-control">
        <input type="datetime-local" v-model="meetup.date">
      </span>
    </div>
 
    <!-- meetup.location -->
    <div class="input-control">
      <span class="label">Location:</span>
      <span class="form-control">
        <input type="text" v-model="meetup.location">
      </span>
    </div>
  
    <!-- meetup.petsAllowed -->
    <div class="input-control">
      <span class="label">Pets Allowed?</span>
      <span class="form-control">
        <input type="radio" name="petsAllowed" :value="true" v-model="meetup.petsAllowed"> Yes
        <input type="radio" name="petsAllowed" :value="false" v-model="meetup.petsAllowed"> No
      </span>
    </div>
  
    <!-- meetup.bacciFriendly -->
    <div class="input-control">
      <span class="label">Baccy friendly?</span>
      <span class="form-control">
        <input type="checkbox" v-model="meetup.bacciFriendly">
        <label>Yes</label>
      </span>
    </div>
  
    <!-- add button -->
    <div class="input-control" v-if="!meetup.id">
      <span class="label"></span>
      <span class="form-control">
        <button @click="notifyParent('added')">Create the Meetup</button>  
      </span>
    </div>
  
    <!-- edit button -->
    <div class="input-control" v-if="meetup.id">
      <span class="label"></span>
      <span class="form-control">
        <button @click="notifyParent('edited')">Edit the Meetup</button>  
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
    },
    meetupToEdit: {
      type: Object,
      required: false
    }
  },
  
  methods: {
    notifyParent(mode) {
      this.$emit(`meetup-${mode}`, this.meetup)
    }
  },

  created() {
    this.$watch('meetupToEdit', newVal => this.meetup = newVal)
  },

  data() {
    return {
      meetup: {
        title: null,
        description: null,
        category: null,
        location: null,
        date: null,
        time: null,
        petsAllowed: false,
        bacciFriendly: false,
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
