import axios from 'axios'

export function updateMeetup(meetup){
  return axios.put(`http://localhost:3000/meetups/${meetup.id}`, meetup)
}

export function deleteMeetup(meetupId) {
  // return axios.delete(`http://localhost:3000/meetups/${meetupId}`)
  return axios.delete('http://localhost:3000/meetups/' + meetupId)
}

export function addMeetup(meetup) {
  return axios.post('http://localhost:3000/meetups', meetup)
}

export function getMeetups() {
  return axios.get('http://localhost:3000/meetups/')
}