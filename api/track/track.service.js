import mongodb from 'mongodb'
const { ObjectId } = mongodb

import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'

export const trackService = {
    // remove,
    query,
    // getById,
    // add,
    // update,
}

async function query(filterBy = { txt: '', sortBy: 'title' }) {
    const { sortBy, isfeatured, vibe, _id } = filterBy
    try {
        const criteria = {
            title: { $regex: filterBy.txt, $options: 'i' }
        }
        if (isfeatured) criteria.isfeatured = true
        if (vibe) criteria.vibe = vibe
        // if (_id) criteria._id = ObjectId(_id)

        const collection = await dbService.getCollection('track')
        let tracks = await collection.find(criteria).sort({ [sortBy]: 1 }).toArray()
        return tracks
    } catch (err) {
        logger.error('cannot find tracks', err)
        throw err
    }
}