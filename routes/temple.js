const express = require('express');
const router = express.Router();
const templController = require ('../controllers/templeController.js')


router.get('/', templController.index);

router.get('/:id', templController.showId);

router.post('/', templController.addData);

router.put('/:id', templController.editDataId);

router.delete('/:id', templController.deleteData);




module.exports = router;