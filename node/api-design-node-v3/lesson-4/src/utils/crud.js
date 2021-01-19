export const getOne = model => async (req, res) => {
  try {
    const found = await model.findById(req.params.id).exec()
    return res.status(200).json(found)
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  try {
    const found = await model.find({}).exec()
    return res.status(200).json(found)
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const createOne = model => async (req, res) => {
  try {
    const created = await model.create({ ...req.body })
    return res.status(200).json(created)
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const updateOne = model => async (req, res) => {
  try {
    const updated = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
    return res.status(200).json(updated)
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const removeOne = model => async (req, res) => {
  try {
    const updated = await model.findByIdAndRemove(req.params.id).exec()
    return res.status(200).json(updated)
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
