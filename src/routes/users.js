// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getUsers = async (req, res) => {
  const users = await Prisma.users.findMany()

  res.status(200).json({
    success: true,
    data: users
  })
}

export {
  getUsers
}
