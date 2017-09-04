'use strict';

import {
    RouteConfiguration
} from 'hapi';

import * as Joi from 'joi';

import handler from './handler';

const routes: RouteConfiguration[] = [

    {
        method: "POST",
        path: "/insert",
        config: {
            description: 'Insert api',
            notes: 'Insert api for cars',
            tags: ['api', 'insert'],
            validate: {
                payload: {
                    make: Joi.string().required().description("Make of the car"),
                    model: Joi.string().required().description("Model of the car"),
                    year: Joi.number().required().description("Year of the car")
                }
            }
        },
        handler: handler.insert
    },

    {
        method: "POST",
        path: "/update",
        config: {
            description: 'Update api',
            notes: 'Update api for car',
            tags: ['api', 'update'],
            validate: {
                payload: {
                    id: Joi.number().required().description("Unique id of the car"),
                    make: Joi.string().required().description("Make of the car"),
                    model: Joi.string().required().description("Model of the car"),
                    year: Joi.number().required().description("Year of the car")
                }
            }
        },
        handler: handler.update
    },

    {
        method: "POST",
        path: "/fetch",
        handler: handler.fetch,
        config: {
            description: 'Fetch api',
            notes: 'Fetch api for car',
            tags: ['api', 'fetch'],
        }
    },

    {
        method: "POST",
        path: "/delete",
        config: {
            description: 'Delete api',
            notes: 'Delete api for car',
            tags: ['api', 'delete'],
            validate: {
                payload: {
                    id: Joi.number().required().description("Unique id of the car")
                }
            }
        },
        handler: handler.delete
    },

    {
        method: "POST",
        path: "/search",
        config: {
            description: 'Search api',
            notes: 'Search api for car',
            tags: ['api', 'search'],
            validate: {
                payload: {
                    str: Joi.string().required().description("String to be searched")
                }
            }
        },
        handler: handler.search
    }

]

export default routes;
