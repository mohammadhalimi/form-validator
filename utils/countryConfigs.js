const countryConfigs = {
    iran: {
        name: "Iran",
        code: "IR",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    turkey: {
        name: "Turkey",
        code: "TR",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    usa: {
        name: "United States",
        code: "US",
        supports: {
            phone: true, //there is a problem
            postalCode: true,
            nationalId: true
        }
    },
    uk: {
        name: "United Kingdom",
        code: "GB",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    germany: {
        name: "Germany",
        code: "DE",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    france: {
        name: "France",
        code: "FR",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    russia: {
        name: "Russia",
        code: "RU",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    },
    china: {
        name: "China",
        code: "CN",
        supports: {
            phone: true,
            postalCode: true,
            nationalId: true
        }
    }
};

module.exports = countryConfigs;
