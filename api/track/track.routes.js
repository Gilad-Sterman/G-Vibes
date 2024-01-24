import express from 'express'
import { getTracks } from './track.controller.js'

export const trackRoutes = express.Router()

trackRoutes.get('/', getTracks)
