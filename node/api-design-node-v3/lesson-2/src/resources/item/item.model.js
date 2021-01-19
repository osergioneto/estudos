import mongoose from 'mongoose'
import { v4 } from "uuid"

const itemSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        default: v4()
    },
    completed: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        required: true
    },
    deletedAt: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'list',
        required: true
    }
}, { timestamps: true })

export const Item = mongoose.model('item', itemSchema)
