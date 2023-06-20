import express from 'express'
import { PrismaClient } from '@prisma/client'

export const application = express()
export const prismaClient = new PrismaClient()
