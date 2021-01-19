import mongoose from "mongoose"
import { connect } from '../utils/db'

export const getOne = model => async (req, res) => { }

export const getMany = model => async (req, res) => { }

export const createOne = model => async (req, res) => {
  await connect();

  return model.create({ ...req.body })
}

export const updateOne = model => async (req, res) => { }

export const removeOne = model => async (req, res) => { }

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
