#Gets data from nflreadr since I have used this before and am lazy
library(nflreadr)
library(jsonlite)

teams <- load_teams()
teams <- teams[, c("team_abbr", "team_name", "team_nick", "team_conf", "team_division", "team_color", "team_logo_wikipedia")]
json_data <- toJSON(teams, Pretty=TRUE)
file_name <- "teamData.json"
write_json(teams, file_name)

cat("Team info saved to ", getwd(), "/", file_name, "\n", sep = "")

