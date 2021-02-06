const orm = require('../config/orm');
const patty = {
  all(cb) {
    orm.all('patties', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('patties', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('patties', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('patties', condition, (res) => cb(res));
  }
};

module.exports = patty;