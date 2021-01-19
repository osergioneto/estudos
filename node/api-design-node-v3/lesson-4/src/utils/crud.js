export const getOne = model => async (req, res) => {
  try {
    const found = await model.findOne({ id: req.params.id, createdBy: req.user._id }).exec()

    if (!found) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: found })
  } catch (error) {
    console.error(e)
  }
}

export const getMany = model => async (req, res) => {
  try {
    const found = await model.find({ createdBy: req.user._id }).exec()

    if (!found) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: found })
  } catch (e) {
    console.error(e)
  }
}

export const createOne = model => async (req, res) => {
  try {
    const created = await model.create({ ...req.body, createdBy: req.user._id })
    return res.status(201).json({ data: created })
  } catch (e) {
    console.error(e)
  }
}

export const updateOne = model => async (req, res) => {
  const updated = await model.findOneAndUpdate({
    _id: req.params.id,
    createdBy: req.user._id
  },
    req.body,
    { new: true })
    .lean()
    .exec()

  if (!updated) {
    return res.status(400).end()
  }

  return res.status(200).json({ data: updated })
}

export const removeOne = model => async (req, res) => {
  const updated = await model.findOneAndRemove({
    _id: req.params.id,
    createdBy: req.user._id
  }).exec()

  if (!updated) {
    return res.status(400).end()
  }

  return res.status(200).json({ data: updated })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
