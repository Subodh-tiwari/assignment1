'use strict';

import psql from './config/postgress/client';

export class Car extends psql.Model<Car> {
    get tableName() {
            return 'car';
    }

    get hasTimestamps() {
        return true;
    }
}

export const Cars = Car.collection();
