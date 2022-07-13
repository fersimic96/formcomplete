const express = require('express')
const {

  getParametersForms,
  getParameterForm,
  createParameterdata,
  deleteParamater,
  updateParameter
} = require('../controllers/parameterController')
const { update } = require('../models/parameterModel')

const router = express.Router()

// GET all PARAMTER FORMS
router.get('/', getParametersForms)

// GET a single List parameterForm
router.get('/:id', getParameterForm)

// POST a new workout
router.post('/', createParameterdata)

// DELETE a workout
router.delete('/:id', deleteParamater)

// UPDATE a workout
router.patch('/:id', updateParameter)

module.exports = router