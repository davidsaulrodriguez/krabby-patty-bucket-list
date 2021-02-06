const express = require('express');
const router = express.Router();
const patty = require('../models/patty');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  patty.all((data) => {
    const hbsObject = {
      patties: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.get('/patties', (req, res) => {
  patty.all((data) => {
    const hbsObject = {
      patties: data,
    };
    res.json(hbsObject);
  });
})

router.post('/api/patties', (req, res) => {
  patty.create(['name'], [req.body.name], (result) => {
    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});

router.put('/api/patties/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  patty.update({
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/patties/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  patty.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;