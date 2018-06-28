const $ = require ("jquery")
const databaseCollection = Object.create({}, {
    "getPolitician": {
        value: function () {
            return $.ajax("http://localhost:3000/Politician")
        }
    },
    "getBill": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/LegislativeBill/${id}`)
        }
    },
    "getDonation": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/Donation/${id}`)
        }
    },
    "getPAC": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/Political%20Action%20Committee/${id}`)
        }
    },
    "getPACorp": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/PACCorp/${id}`)
        }
    },
    "getCorp": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/Corporation/${id}`)
        }
    },
});

module.exports = databaseCollection
