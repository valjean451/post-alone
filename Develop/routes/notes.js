const noteRoute = require('express').Router();
const {readDB, writeDB, updateDB} = require('../helpers/utilities')

noteRoute.get('/api/notes', (req, res) => {
    // readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    readDB('../db/db.json').then((data) => res.json(data))
})

noteRoute.post('/api/notes', (req, res) => {
    // console.log(req.body);
  
    // const { username, topic, tip } = req.body;
  
    // if (req.body) {
    //   const newTip = {
    //     username,
    //     tip,
    //     topic,
    //     tip_id: uuidv4(),
    //   };
  
    //   readAndAppend(newTip, './db/tips.json');
    //   res.json(`Tip added successfully 🚀`);
    // } else {
    //   res.error('Error in adding tip');
    // }
  });



module.exports = noteRoute;