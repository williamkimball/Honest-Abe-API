const politicianCollectionModule = require("./database/databaseCollection")

const politicianList = Object.create({}, {
    "buildPoliticianList": {
        value: function () {
            politicianCollectionModule.getPolitician()
                .then((response) => {
                    const currentListRef = document.querySelector(".list-politician-article")
                    if (currentListRef) {
                        currentListRef.remove()
                    }
                    const politicianArticle = document.createElement("article")
                    politicianArticle.className = "list-politicians-article"
                    const politicianModule = require("./politician")
                    response.forEach(politician => {
                        politicianArticle.appendChild(politicianModule.createpoliticianComponent(politician))
                    });
                    document.querySelector("#politicianCards").appendChild(politicianArticle)
                })
        }
    }
})

module.exports = politicianList
