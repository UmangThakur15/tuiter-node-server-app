// import posts from "./tuits.js";
// let tuits = posts;

import * as tuitsDao from './tuits-dao.js';   // import the dao


const createTuit = async(req, res) => {
    const newTuit = req.body;
    
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.time = "1h";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.handle = "@nasa";
    newTuit.userName = "Nasa"
    newTuit.image = "https://th.bing.com/th/id/R.dfe000c4d39e10adeac73e968d0081c0?rik=2qecWrg5GwkLaA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-1664.png&ehk=d%2bgvuoNz%2b0udsBSxL%2bAGF0N%2f1tWoj4H6GaKOJhRCIyQ%3d&risl=&pid=ImgRaw&r=0"
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
  }
  
  
// const findTuits = (req, res) =>{
//    res.json(tuits);
// }


const findTuits = async (req, res) => {  // now it's asynchronous function
  const tuits = await tuitsDao.findTuits()    // retrieve tuits from database
  res.json(tuits);
}


const updateTuit = async(req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
  }
  
const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

    // tuits = tuits.filter((t) =>
    //   t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
    res.json(status);
  }
  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
