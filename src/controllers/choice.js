const express = require('express')
const choiceRouter = express.Router()
const { Choice, Question } = require('../models')

choiceRouter.get('/', async (req, res) => {
	const choices = await Choice.findAll({
		include: Question
	})
	res.json(choices)
})

choiceRouter.post('/', async (req, res) => {
	const choice = await Choice.create( req.body )
	res.json(choice)
})

choiceRouter.get('/:id', async (req, res) => {
	const choice = await Choice.findByPk( Number(req.params.id), {
		include: Question
	})
	res.json(choice.Quiz)
})

choiceRouter.post('/:id', async (req, res) => {
	var choice = await Choice.update( req.body, {
	  where: { id: Number(req.params.id) }
	})
	var choice = await Choice.findByPk( Number(req.params.id) )
	res.json(choice)
})

choiceRouter.delete('/:id', async (req, res) => {
	const deleted = await Choice.destroy({
		where: { id: Number(req.params.id) }
	})
	res.json(deleted)
})

module.exports = choiceRouter
