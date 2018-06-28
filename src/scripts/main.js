const Database = require ("./databaseCollection")
const Politician = require("./politician")


let politician  = Database.getPolitician()
const ContactList = require("./politicianList")

ContactList.buildPoliticianList();
