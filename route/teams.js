const express = require("express");
const router = express.Router();
const dataService = require("../data/data");

// get teams 
router.get("/:team/:status", (request, response) => {    
    const teamName = request.params["team"];    
    const status = request.params["status"];
    if(status == 'all'){
      dataService.getFilteredByTeam(teamName).then((result) => {   
        response.send(result)}); 
    }
    else{
      dataService.getFilteredByTeamAndStatus(status, teamName).then((result) => {   
            response.send(result)}); 
    }  
  });  
  
  module.exports = router;