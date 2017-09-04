'use strict';

import {
    Car,
    Cars
} from './models';

import {
    Model
} from 'typings';

import * as Bluebird from 'bluebird';

const controller = {
    insert(data: Model.Car): Bluebird<boolean> {
        return new Car(data)
            .save()
            .then(data => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    },

    fetch(): Bluebird<Model.Response[]> {
        return Cars
            .fetch()
            .then(data => data.toJSON())
            .then(data => {
                return data.map(datum => {
                    return {
                        id: datum.id,
                        make: datum.make,
                        model: datum.model,
                        year: datum.year
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return [];
            });
    },

    delete(id: number): Bluebird<boolean> {
        return new Car({ id })
            .destroy()
            .then(data => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    },

    update(data: Model.Car): Bluebird<Model.Response> {
        data.updated_at = new Date();
        return new Car({ id: data.id })
            .save(data, { method: 'update', patch: true })
            .then(data => data.toJSON())
            .then(data => {
                return {
                    id: data.id,
                    make: data.make,
                    model: data.model,
                    year: data.year
                } as Model.Response
            })
            .catch(err => {
                console.log(err);
            });
    },

    search(str: string): Bluebird<Model.Response[]> {
        return Cars
            .query(qb => qb.where('make', 'LIKE', `%${str}%`)
                .orWhere('model', 'LIKE', `%${str}%`)
                .orWhere('year', 'LIKE', `%${str}%`)
            )
            .fetch()
            .then(data => data.toJSON())
            .then(data => {
                return data.map(datum => {
                    return {
                        id: datum.id,
                        make: datum.make,
                        model: datum.model,
                        year: datum.year
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return [];
            });
    }
};

export default controller;
