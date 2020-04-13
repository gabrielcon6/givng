const express = require('express');
const { check } = require('express-validator');

const givngsControllers = require('../controllers/givngs-controllers');

const router = express.Router();

router.get('/:gvid', givngsControllers.getPlaceById);

router.get('/user/:uid', givngsControllers.getPlacesByUserId);

router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  givngsControllers.createPlace
);

router.patch(
  '/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  givngsControllers.updatePlace
);

router.delete('/:pid', givngsControllers.deletePlace);

module.exports = router;
