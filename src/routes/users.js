// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getUsers = async (req, res) => {
  try {
    const users = await Prisma.users.findMany()

    res.status(200).json({
      success: true,
      data: users
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      data: 'Failed to get users!'
    })
  }
}

export {
  getUsers
}
