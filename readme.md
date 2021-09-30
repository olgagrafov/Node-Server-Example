An explanation on how to run and use:
1) npm i  -> for instal node_modules
2) node server -> start server : http://localhost:8000/
3) API - Get list of matches by team: teams/{team name}/all
   for exampale: http://localhost:8000/teams/arsenal/all
4) API - Get list of matches by team filtered by status: teams/{team name}/{status}   
   for exampale result_played: http://localhost:8000/teams/arsenal/played
   for exampale result_upcoming: http://localhost:8000/teams/arsenal/unplayed
5) API - Get list of matches by tournament: tournaments/{tournament name}/all   
   for exampale result_played: http://localhost:8000/tournaments/fa/all
6) API - Get list of matches by tournament filtered by status:tournaments/{tournament name}/{status}
   for exampale result_played: http://localhost:8000/tournaments/premier-league/played
   for exampale result_upcoming: http://localhost:8000/tournaments/fa/unplayed 