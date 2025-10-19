// eslint-disable-next-line no-unused-vars
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { loginModel } from '../../models/user.js'
import { z } from 'zod'

const Prisma = new PrismaClient()

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const loginUser = async (req, res) => {
  const data = req.body

  if (data == null) {
    res.status(400).json({
      success: false,
      message: 'No data received'
    })
    return
  }

  try {
    await z.parse(loginModel, data)
  } catch (err) {
    if (err instanceof z.ZodError) {
      const message = JSON.parse(err.message)
      res.status(400).json({
        success: false,
        message: message[0].message
      })
      return
    }
  }

  const { email, password } = data

  if (!email) {
    res.status(400).json({
      success: false,
      message: 'No email received'
    })
    return
  }

  if (!password) {
    res.status(400).json({
      success: false,
      message: 'No email received'
    })
    return
  }

  const userDb = await Prisma.users.findUnique({
    where: {
      email
    }
  })

  if (!userDb) {
    res.status(400).json({
      success: false,
      message: 'No user found with that email'
    })
    return
  }

  await bcrypt.compare(password, userDb.password, (err, same) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: `Error comparing passwords: ${err}`
      })
      return
    }

    if (!same) {
      res.status(400).json({
        success: false,
        message: 'Password mismatch'
      })
      return
    }

    const token = jwt.sign(
      {
        userEmail: email,
        role: userDb.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '48h'
      }
    )

    res.status(200).json({
      success: true,
      message: 'Loged in successfully!',
      token
    })
  })
}

export {
  loginUser
}
