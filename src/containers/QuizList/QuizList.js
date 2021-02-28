import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from 'axios'

export default class QuizList extends Component {

  state = {
    quizes: []
  }

  renderQuizes() {
    return [1,2,3].map((quiz, index) => {
      return (
        <li 
          key={index}

        >
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {

    try {
      const responce = await axios.get('https://react-quiz-6ab9c-default-rtdb.firebaseio.com/quizes.json')

      Object.keys(responce.data).forEach((key, index) => {

      })

    } catch (e) {
      console.log(e)
    }

  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    )
  }
}