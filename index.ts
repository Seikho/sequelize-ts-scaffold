Promise = require('bluebird');
import {bar} from './foo';
import * as seq from 'sequelize';

seq.ARRAY;

async function foo() {
    return Promise.try(() => Promise.resolve(2));
}
