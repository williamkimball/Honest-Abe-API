const $ = require("jquery")
const databaseCollection = require("./databaseCollection")

const politician = Object.create({}, {
    "createpoliticianComponent": {
        value: function (politician) {

            const politicianSection = document.createElement("article")

            politicianSection.id = `${politician.id}`
            politicianSection.className = "politician"

            for (key in politician) {
                if (key === "billId") {
                    let billSection = document.createElement("section")

                    billSection.className = "politician__bills"

                    let bills = databaseCollection.getBill(politician[key])
                        .then((response) => {
                            console.log(response)
                            let billHeading = document.createElement("h1")
                            billHeading.textContent = "Sponsored Bills"
                            billSection.appendChild(billHeading)
                            let billDiv = document.createElement("div")
                            let billHead = document.createElement("h5")
                            billHead.textContent = `${response["name"]}`
                            let billPointList = document.createElement("ul");
                            let billPointsLi = function () {
                                return document.createElement("li");
                            }
                            let billPoints = response["billPoints"];
                            billPoints.forEach(element => {
                                let billPoint = billPointsLi()
                                billPoint.textContent = element;
                                billPointList.appendChild(billPoint)
                            });
                                billDiv.appendChild(billHead)
                                billDiv.appendChild(billPointList)
                                billSection.appendChild(billDiv)
                            })
                    politicianSection.appendChild(billSection)
                } else if (key === "pacId") {
                    let pacSection = document.createElement("section")

                    pacSection.className = "politician__pacs"

                    let pacs = databaseCollection.getPAC(politician[key])
                        .then((response) => {
                            // console.log(response)
                            let pacHeading = document.createElement("h4")
                            pacHeading.textContent = "Related PACs"
                            pacSection.appendChild(pacHeading)
                            let pacDiv = document.createElement("div")
                            let pacName = document.createElement("h5")
                            pacName.textContent = `${response["name"]}`
                            console.log(pacName)
                            let pacPointList = document.createElement("ul");
                            let pacPointsLi = function () {
                                return document.createElement("li");
                            }
                            let pacPoints = response["pacPoints"];
                            // pacPoints.forEach(element => {
                            //     let pacPoint = pacPointsLi()
                            //     pacPoint.textContent = element;
                            //     pacPointList.appendChild(pacPoint)
                            // });
                                pacDiv.appendChild(pacName)
                                pacDiv.appendChild(pacPointList)
                                pacSection.appendChild(pacDiv)
                            })
                    politicianSection.appendChild(pacSection)
                }
                else if (key === "name") {
                    const paraElement = document.createElement("header")
                    let politicianHeader = document.createElement("h1")
                    paraElement.className = "politician_name"
                    politicianHeader.textContent = `${politician[key]}`
                    paraElement.appendChild(politicianHeader)
                    politicianSection.appendChild(paraElement)
                }
            }

            return politicianSection
        }
    }
})

module.exports = politician
