const currencyCurlResult = `
    {
        "base": "USD",
        "date": "2022-09-14",
        "countries": [
            {
                "currencyCode": "USD",
                "currencyName": "United States Dollar",
                "country": "United States",
                "rate": 1
            },
            {
                "currencyCode": "AED",
                "currencyName": "UAE Dirham",
                "country": "United Arab Emirates",
                "rate": 3.67
            },
            {
                "currencyCode": "AFN",
                "currencyName": "Afghan Afghani",
                "country": "Afghanistan",
                "rate": 88.11
            },
            {
                "currencyCode": "ALL",
                "currencyName": "Albanian Lek",
                "country": "Albania",
                "rate": 116
            },
            {
                "currencyCode": "AMD",
                "currencyName": "Armenian Dram",
                "country": "Armenia",
                "rate": 405.36
            },
            {
                "currencyCode": "ANG",
                "currencyName": "Netherlands Antillian Guilder",
                "country": "Netherlands Antilles",
                "rate": 1.79
            }
            ...
        ]
    }`;

const currencyGraphqlQuery = `
    {
        currency {
            base
            date
            countries {
                currencyCode
                currencyName
                country
                rate
            }
        }
    }`;

function currencyOprations(menuId,mainId) {
    return (`<p>
    For get ${menuId} exchange rate use following url:<br>
    <span class="method-bold">
        All ${menuId} [ <a target="_blank" href="https://open-data.ssovee.com/${mainId}/v1/${menuId}">GET</a> ]:<br/> 
        <code class="higlighted break-word">https://open-data.ssovee.com/${mainId}/v1/${menuId}</code>
    </span>
</p>`);
}

function currencyGraphQL(menuId,mainId) {
    return (`<p>
    For get ${menuId} exchange rate use following url <a target="_blank" href="https://open-data.ssovee.com/graphql/v1/${menuId}">playground</a>:<br>
    <span class="method-bold">
       [ GET ]: <codeclass="higlighted break-word">https://open-data.ssovee.com/${mainId}/v1/${menuId}</code>
    </span>
</p>`);
}