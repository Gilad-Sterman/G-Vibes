import { logger } from "../../services/logger.service.js"
import { trackService } from "./track.service.js"

export async function getTracks(req, res) {
    try {
        const filterBy = {
            txt: req.query.txt || '',
            sortBy: req.query.sortBy || 'title',
            isfeatured: req.query.isfeatured || null
        }
        // logger.debug('Getting tracks', filterBy)
        // console.log('Getting tracks', filterBy)
        const tracks = await trackService.query(filterBy)
        res.json(tracks)
    } catch (err) {
        logger.error('Failed to get tracks', err)
        console.log('Failed to get tracks', err)
        res.status(500).send({ err: 'Failed to get tracks' })
    }
}