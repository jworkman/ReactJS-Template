const express = require('express')
const questionCtlr = express.Router()
const { Choice, Question } = require('../models')

chioceCtlr.get('/', async (req, res) => {
	const choices = await Choice.findAll({
		include: Question
	})
	res.json(choices)
})

chioceCtlr.post('/', async (req, res) => {
	const choice = await Choice.create( req.body )
	res.json(choice)
})

chioceCtlr.get('/:id', async (req, res) => {
	const choice = await Choice.findByPk( Number(req.params.id), {
		include: Question
	})
	res.json(choice.Quiz)
})

chioceCtlr.post('/:id', async (req, res) => {
	var choice = await Choice.update( req.body, {
	  where: { id: Number(req.params.id) }
	})
	var choice = await Choice.findByPk( Number(req.params.id) )
	res.json(choice)
})

chioceCtlr.delete('/:id', async (req, res) => {
	const deleted = await Choice.destroy({
		where: { id: Number(req.params.id) }
	})
	res.json(deleted)
})

module.exports = chioceCtlr
