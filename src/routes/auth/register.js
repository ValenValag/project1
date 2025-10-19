// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const Prisma = new PrismaClient()

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const registerUser = async (req, res) => {
  const userInfo = req.body

  if (userInfo == null) {
    res.status(400).json({
      success: false,
      message: 'Failed to get the data'
    })
    return
  }

  let user = null
  try {
    user = await Prisma.users.create({
      data: {
        ...userInfo,
        password: await bcrypt.hash(userInfo.password, 10)
      }
    })
  } catch (err) {
    if (err.code === 'P2002') {
      res.status(400).json({
        success: false,
        message: 'Email in use already!'
      })
      return
    }

    res.status(400).json({
      success: false,
      message: `Failed during adding user to db: ${err.message}`
    })
    return
  }

  res.status(200).json({
    success: true,
    message: 'User added successfully: \n',
    user
  })
}

export { registerUser }
