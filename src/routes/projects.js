// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getProjects = async (req, res) => {
  const { userEmail } = req.user
  const projects = await Prisma.projects.findMany({
    where: {
      workers: {
        has: userEmail
      }
    }
  })

  if (projects == null) {
    res.status(400).json({
      success: false,
      message: 'No projects found for this user'
    })
    return
  }

  const data = projects
  res.status(200).json({
    success: true,
    data
  })
}

const createProject = async (req, res) => {
  const project = req.body
  if (project == null) {
    res.status(400).json({
      success: false,
      message: 'No project added'
    })
    return
  }
  try {
    await Prisma.projects.create({
      data: project
    })
    res.status(200).json({
      success: true,
      message: 'Project created successfully'
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create project'
    })
  }
}

export {
  getProjects,
  createProject
}
