const express = require("express");
const router = express.Router();
const dataService = require("../data/data");

// get specific tournament
router.get("/:tournament/:status", (request, response) => {

    const status = request.params["status"];
    const tournament = request.params["tournament"];  
    
    if(status == 'all'){
      dataService.getFilteredByTournament(tournament).then((result) => {   
        response.send(result)}); 
    }
    else{
      dataService.getFilteredByTournamentAndStatus(status, tournament).then((result) => {   
          response.send(result)});   
    }
  });  

module.exports = router;