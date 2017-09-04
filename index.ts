'use strict';

/// <reference path="./typings.d.ts" />

import * as Hapi from 'hapi';

import routes from './routes';
import plugins from './plugin';

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route(routes);

server.register(plugins, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
