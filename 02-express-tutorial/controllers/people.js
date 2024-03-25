const { people } = require('../data');

const addPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide a name' })
    }
    people.push({ id: people.length + 1, name: name })
    res.status(201).json({ success: true, name: name })
}

const getPeople = (req, res) => {
	res.json(people)
}

const getPerson = (req, res) => {
    const id = parseInt(req.params.id)
    if(!checkForValue(res, id)) {
        return;
    }
    const personById = findPersonById(res, id);
    if(!personById) {
        return;
    }
       
    res.status(200).json({ success: true, message: personById })
}

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id);
    const updatingName = req.body.updatingName;
    if(!checkForValue(res, id)) {
        return;
    }
    const personById = findPersonById(res, id);
    if(!personById) {
        return;
    }
    console.log(updatingName)
    console.log(people[id - 1])
    people[id - 1].name = updatingName;
    res.json({ success: true, message: people[id - 1] })
}

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id);
    if(!checkForValue(res, id)) {
        return;
    }
    const newPeople = people.filter(personObj => {
        return personObj.id !== id
    })
    res.json({ message: "success", newPeople })
}

function checkForValue(res, id) {
    if (!id) {
        res
            .status(400)
            .json({ success: false, message: 'please provide an id number' })
        return false
    }
    return true
}

function findPersonById(res, id) {
   const personById = people.find(personObj => personObj.id === id);
    if(!personById) {
        res.status(404).json({ success: false, message: 'A person with the given Id number was not found' })
        return false
    }
    return personById;
}

module.exports = { 
    addPerson,
    getPeople,
    getPerson,
    updatePerson,
    deletePerson
}