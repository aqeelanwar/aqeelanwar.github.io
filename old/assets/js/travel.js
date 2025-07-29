var map = AmCharts.makeChart("map-countries", {
    type: "map",
    theme: "light",
    projection: "eckert5",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 0,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "worldHigh",
        getAreasFromMap: true,
        areas:
            [
                {
                    "id": "AT",
                    "showAsSelected": true
                },
                {
                    "id": "JP",
                    "showAsSelected": true
                },
                {
                    "id": "GR",
                    "showAsSelected": true
                },
                {
                    "id": "LI",
                    "showAsSelected": true
                },
                {
                    "id": "BE",
                    "showAsSelected": true
                },
                {
                    "id": "CZ",
                    "showAsSelected": true
                },
                {
                    "id": "FR",
                    "showAsSelected": true
                },
                {
                    "id": "DE",
                    "showAsSelected": true
                },
                {
                    "id": "IS",
                    "showAsSelected": true
                },
                {
                    "id": "IT",
                    "showAsSelected": true
                },
                {
                    "id": "NL",
                    "showAsSelected": true
                },
                {
                    "id": "ES",
                    "showAsSelected": true
                },
                {
                    "id": "CH",
                    "showAsSelected": true
                },
                {
                    "id": "TR",
                    "showAsSelected": true
                },
                {
                    "id": "GB",
                    "showAsSelected": true
                },
                {
                    "id": "VA",
                    "showAsSelected": true
                },
                {
                    "id": "US",
                    "showAsSelected": true
                },
                {
                    "id": "BD",
                    "showAsSelected": true
                },
                {
                    "id": "PK",
                    "showAsSelected": true
                },
                {
                    "id": "SA",
                    "showAsSelected": true
                },
                {
                    "id": "AE",
                    "showAsSelected": true
                }
            ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
})

var map = AmCharts.makeChart("map-states", {
    type: "map",
    theme: "light",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 0,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "usaHigh",
        getAreasFromMap: true,
        areas:
            [
                {
                    "id": "US-AL",
                    "showAsSelected": true
                },
                {
                    "id": "US-IN",
                    "showAsSelected": true
                },
                {
                    "id": "US-CA",
                    "showAsSelected": true
                },
                {
                    "id": "US-CT",
                    "showAsSelected": true
                },
                {
                    "id": "US-DC",
                    "showAsSelected": true
                },
                {
                    "id": "US-FL",
                    "showAsSelected": true
                },
                {
                    "id": "US-GA",
                    "showAsSelected": true
                },
                {
                    "id": "US-IL",
                    "showAsSelected": true
                },
                {
                    "id": "US-KY",
                    "showAsSelected": true
                },
                {
                    "id": "US-LA",
                    "showAsSelected": true
                },
                {
                    "id": "US-MA",
                    "showAsSelected": true
                },
                {
                    "id": "US-ME",
                    "showAsSelected": true
                },
                {
                    "id": "US-MI",
                    "showAsSelected": true
                },
                {
                    "id": "US-MO",
                    "showAsSelected": true
                },
                {
                    "id": "US-NC",
                    "showAsSelected": true
                },
                {
                    "id": "US-NH",
                    "showAsSelected": true
                },
                {
                    "id": "US-NJ",
                    "showAsSelected": true
                },
                {
                    "id": "US-NV",
                    "showAsSelected": true
                },
                {
                    "id": "US-NY",
                    "showAsSelected": true
                },
                {
                    "id": "US-PA",
                    "showAsSelected": true
                },
                {
                    "id": "US-RI",
                    "showAsSelected": true
                },
                {
                    "id": "US-SC",
                    "showAsSelected": true
                },
                {
                    "id": "US-TN",
                    "showAsSelected": true
                },
                {
                    "id": "US-TX",
                    "showAsSelected": true
                },
                {
                    "id": "US-VA",
                    "showAsSelected": true
                },
                {
                    "id": "US-WA",
                    "showAsSelected": true
                }
            ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
})
