const db = require('./db.js');

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

const objToSql = (ob) => {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }

  return arr.toString();
};

const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    db.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create(table, cols, vals, cb) {
    let queryString =
      `INSERT INTO ${table} (${cols.toString()})
      VALUES (${printQuestionMarks(vals.length)});`;

    console.log(queryString);

    db.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update(table, objColVals, condition, cb) {
    let queryString =
      `UPDATE ${table}
      SET ${objToSql(objColVals)}
      WHERE ${condition};`;

    console.log(queryString);
    db.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete(table, condition, cb) {
    let queryString =
      `DELETE FROM ${table}
      WHERE ${condition}`;

    db.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;