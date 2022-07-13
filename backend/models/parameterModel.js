const mongoose = require('mongoose')

const Schema = mongoose.Schema

const parameterSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  parameter1: {
    type: Number,
    required: true
  },
  parameter2: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: true
  },
 
}, { timestamps: true })

module.exports = mongoose.model('Parameter', parameterSchema)