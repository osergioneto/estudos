import config from '../config'
import { User } from '../resources/user/user.model'
import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password })

  return newToken(user);
}

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('User not found')
  }

  const isValidPassword = await compare(password, user.password)

  if (!isValidPassword) {
    throw new Error('Email/password is not valid')
  }

  return newToken(user);
}

export const protect = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization.startsWith('Bearer ')) {
    throw new Error('Bad format token')
  }

  const token = authorization.split(' ')[1]
  const isValidToken = await verifyToken(token)

  if (!isValidToken) {
    throw new Error('Invalid token')
  }

  const user = await User.findById({ _id: isValidToken.id }).select('-password').lean()
  req.user = user
  console.log("req.user: ", req.user);


  next()
}
