const express = require('express');
const router = express.Router();
const { people } = require('../data')
const { addPerson, getPeople, getPerson, updatePerson, deletePerson } = require('../controllers/people');

router.post('/', addPerson);
router.get('/', getPeople);
router.get('/:id', getPerson)
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson)

module.exports = router;