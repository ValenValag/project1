// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { userModel } from '../../models/user.js'
import { z } from 'zod'

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
    await userModel.parse(userInfo)

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

    if (err instanceof z.ZodError) {
      const message = JSON.parse(err.message)
      res.status(400).json({
        success: false,
        message: message[0].message
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
