const Parameter = require('../models/parameterModel')
const mongoose = require('mongoose')

// get all PARAMETERS FORMS
const getParametersForms = async (req, res) => {
  const paramaters = await Parameter.find({}).sort({createdAt: -1})

  res.status(200).json(paramaters)
}

// get a single  List Parameter
const getParameterForm = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such parameter'})
  }

  const parameter = await Parameter.findById(id)

  if (!parameter) {
    return res.status(404).json({error: 'No such parameter'})
  }

  res.status(200).json(parameter)
}

// create a new workout
const createParameterdata = async (req, res) => {
  const {title, parameter1, parameter2,description} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!parameter1) {
    emptyFields.push('parameter1')
  }
  if (!parameter2) {
    emptyFields.push('parameter2')
  }
  
  if (!description) {
    emptyFields.push('description')
  }
  
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const paramater = await Parameter.create({ title, parameter1, parameter2,description})
    res.status(200).json(paramater)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteParamater = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such parameter'})
  }

  const parameter = await Parameter.findOneAndDelete({_id: id})

  if(!parameter) {
    return res.status(400).json({error: 'No such paramater'})
  }

  res.status(200).json(parameter)
}

// update a workout
const updateParameter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such parameter'})
  }

  const parameter = await Parameter.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!parameter) {
    return res.status(400).json({error: 'No such parameter'})
  }

  res.status(200).json(parameter)
}

module.exports = {
  getParametersForms,
  getParameterForm,
  createParameterdata,
  deleteParamater,
  updateParameter
}