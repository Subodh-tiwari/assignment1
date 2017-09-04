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

    fetch(): Bluebird<Model.Car[]> {
        return Cars
            .fetch()
            .then(data => data.toJSON())
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

    update(data: Model.Car): Bluebird<Model.Car> {
        return new Car({ id: data.id })
            .save(data, { method: 'update', patch: true })
            .then(user => user.toJSON())
            .catch(err => {
                console.log(err);
                return {};
            });
    },

    search(str: string): Bluebird<Model.Car[]> {
        return Cars
            .query(qb => qb.where('make', 'LIKE', `%${str}%`)
                .orWhere('model', 'LIKE', `%${str}%`)
                .orWhere('year', 'LIKE', `%${str}%`)
            )
            .fetch()
            .then(data => data.toJSON())
            .catch(err => {
                console.log(err);
                return [];
            });
    }
};

export default controller;
