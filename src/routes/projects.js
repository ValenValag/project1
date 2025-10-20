// eslint-disable-next-line no-unused-vars
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { projectModel } from '../models/projects.js'

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
    await z.parse(projectModel, project)
    await Prisma.projects.create({
      data: project
    })
    res.status(200).json({
      success: true,
      message: 'Project created successfully'
    })
  } catch (err) {
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
      message: 'Failed to create project'
    })
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getProjectByID = async (req, res) => {
  const id = req.params.id
  try {
    const project = await Prisma.projects.findUnique({
      where:
        {
          id: Number(id)
        }
    })

    if (project == null) {
      res.status(400).json({
        success: false,
        message: 'No project found'
      })
      return
    }

    res.status(200).json({
      success: true,
      message: project
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to get project ' + err
    })
  }
}

export {
  getProjects,
  createProject,
  getProjectByID
}
