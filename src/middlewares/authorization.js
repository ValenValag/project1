// eslint-disable-next-line no-unused-vars
import express from 'express'
import jwt from 'jsonwebtoken'

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const checkJWT = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header) {
    res.status(400).json({
      success: false,
      message: 'No token'
    })
    return
  }

  const token = header.split(' ')[1]
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Invalid token'
    })
  }
}

export {
  checkJWT
}
