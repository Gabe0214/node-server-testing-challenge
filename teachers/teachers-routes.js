const router = require('express').Router()

const teacherDB = require('./teachers-modal')



router.get('/', (req, res) => {
    teacherDB.find()
    .then(teachers => {
        res.status(201).json(teachers)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "error"})
    })
})

router.post('/' , (req, res) => {
  teacherDB.insert(req.body)
  .then(teacher => {
      res.status(200).json(teacher)
  })
  .catch(err => {
      console.log(err)
      res.status(500).catch({message: "error"})
  })
})


router.delete('/:id', (req, res) => {
    teacherDB.remove(req.params.id)
    .then(result => {
        res.status(201).json(4)
    })
    .catch(err => {
        res.status(500).json({message:"error"})
    })
})

module.exports = router;