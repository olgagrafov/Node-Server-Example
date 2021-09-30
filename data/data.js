const csv = require('csv')
const fs = require('fs')
const upcamingCSV = 'data/csv_files/result_upcoming.csv';
const playedCSV = 'data/csv_files/result_played.csv';

//Get list of matches by team and status 
async function getFilteredByTeamAndStatus(status, teamName) {  
  const promise = await new Promise((resolve, reject) => {
  const jsnResult = [];
    fs.createReadStream( (status == 'played') ? playedCSV :  upcamingCSV) 
      .pipe(csv.parse({columns:true}))
      .on('data', (row) => {
         const headers = Object.keys(row);
           if(row['home_team'].toLowerCase() ==  teamName.toLowerCase() || 
              row['away_team'].toLowerCase() ==  teamName.toLowerCase())
                 jsnResult.push(row);
      })
      .on('end', () => {                
        resolve(jsnResult);      
      });   
  })
  return promise;
}

//Get list of all matches by team 
async function getFilteredByTeam(teamname) {  
  const promise = await new Promise((resolve, reject) => {
  const jsnResult = [];
    fs.createReadStream(playedCSV) 
      .pipe(csv.parse({columns:true}))
      .on('data', (row) => {
         const headers = Object.keys(row);
           if(row['home_team'].toLowerCase() ==  teamname.toLowerCase() || 
              row['away_team'].toLowerCase() ==  teamname.toLowerCase())
                 jsnResult.push(row);
      })
      .on('end', () => {        
        fs.createReadStream(upcamingCSV) 
          .pipe(csv.parse({columns:true}))
          .on('data', (row) => {
            const headers = Object.keys(row);
              if(row['home_team'].toLowerCase() ==  teamname.toLowerCase() || 
                  row['away_team'].toLowerCase() ==  teamname.toLowerCase())
                    jsnResult.push(row);
          })
          .on('end', () => {        
            resolve(jsnResult);
          }); 
      });   
    })
  return promise;
}

//Get list of matches by tournament and status 
async function getFilteredByTournamentAndStatus(status, tournament) {  
  const promise = await new Promise((resolve, reject) => {
  const jsnResult = [];
    fs.createReadStream( (status == 'played') ? playedCSV :  upcamingCSV) 
      .pipe(csv.parse({columns:true}))
      .on('data', (row) => {
         const headers = Object.keys(row);
           if(row['tournament'].toLowerCase() ==  tournament.toLowerCase())
                 jsnResult.push(row);
      })
      .on('end', () => {                
        resolve(jsnResult);      
      });   
  })
  return promise;
}

//Get list of all matches by tournament
async function getFilteredByTournament(tournament) {  
  const promise = await new Promise((resolve, reject) => {
  const jsnResult = [];
    fs.createReadStream(playedCSV) 
      .pipe(csv.parse({columns:true}))
      .on('data', (row) => {
         const headers = Object.keys(row);
           if(row['tournament'].toLowerCase() ==  tournament.toLowerCase())
                 jsnResult.push(row);
      })
      .on('end', () => {                
        fs.createReadStream(upcamingCSV) 
          .pipe(csv.parse({columns:true}))
          .on('data', (row) => {
            const headers = Object.keys(row);
              if(row['tournament'].toLowerCase() ==  tournament.toLowerCase())
                    jsnResult.push(row);
          })
          .on('end', () => {                
            resolve(jsnResult);      
          });      
      });   
  })
  return promise;
}

module.exports = {    
  getFilteredByTeam,
  getFilteredByTeamAndStatus, 
  getFilteredByTournament,
  getFilteredByTournamentAndStatus   
};