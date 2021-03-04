import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-6ab9c-default-rtdb.firebaseio.com/'
})