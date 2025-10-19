// eslint-disable-next-line no-unused-vars
import express from 'express'

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    res.status(400).json({
      success: false,
      message: 'Client not admin'
    })
    return
  }

  next()
}

export {
  isAdmin
}
