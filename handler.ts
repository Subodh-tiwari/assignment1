'use strict';

import {
    Request,
    ReplyNoContinue
} from 'hapi';

import {
    Model
} from 'typings';

import controller from './controller';

const handler = {
    insert(request: Request, reply: ReplyNoContinue) {
        const make = request.payload.make;
        const model = request.payload.model;
        const year = request.payload.year;

        const data: Model.Car = {
            make,
            model,
            year,
            created_at: new Date(),
            updated_at: new Date()
        };

        controller.insert(data)
            .then(data => {
                if (data) {
                    reply()
                } else {
                    reply().code(400)
                }
            })
            .catch(console.log);
    },

    update(request: Request, reply: ReplyNoContinue) {
        const data: Model.Car = {
            id: request.payload.id,
            model: request.payload.model,
            make: request.payload.make,
            year: request.payload.year
        };

        controller.update(data)
            .then(data => {
                if (data) {
                    reply(data)
                } else {
                    reply().code(400)
                }
            })
            .catch(console.log);
    },

    fetch(request: Request, reply: ReplyNoContinue) {
        controller.fetch()
            .then(reply)
            .catch(console.log);

    },

    delete(request: Request, reply: ReplyNoContinue) {
        const id = request.payload.id;

        controller.delete(id)
            .then(data => {
                if (data) {
                    reply()
                } else {
                    reply().code(400)
                }
            });

    },

    search(request: Request, reply: ReplyNoContinue) {
        const str = request.payload.str;

        controller.search(str)
            .then(reply)
            .catch(console.log);
    }

}

export default handler;
