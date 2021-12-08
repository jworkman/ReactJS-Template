import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"

const Quiz = () => {
	const [quiz, setQuiz] = useState({Questions: []})
	const params = useParams()
	useEffect(() => {
		async function fetchQuiz() {
			const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
				headers: {
					token: localStorage.token
				}
			})
	  		setQuiz(q.data)
		}
		fetchQuiz()
	}, []);
	return (
		<form id="quiz">
			<h1>{quiz.name} Quiz</h1>
			<ul>
				{quiz.Questions.map(q => (
					<li>
						<h3>{q.question}</h3>
						<ul>
							<li>
								{q.Choices.map(c => (
									<div>
										<input type="radio" name={'question_' + q.id} required />
										<label>{c.label}</label>
									</div>
								))}
							</li>
						</ul>
					</li>
				))}
			</ul>
			<button type="submit">Submit Quiz</button>
		</form>
	)
}

export default Quiz
