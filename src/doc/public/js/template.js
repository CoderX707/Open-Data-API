// html dynamic ui

const mainMenu = [
    { id: 'get-started', title: 'Get Started' },
    { id: 'rest-api', title: 'REST API' },
    { id: 'graphql', title: 'GraphQL' },
];

const menuList = [
    { id: 'images', title: 'Images' },
    { id: 'users', title: 'Users' },
    { id: 'jobs', title: 'Jobs' },
    { id: 'movies', title: 'Movies' },
    { id: 'currency', title: 'Currency Exchange Rate' },
];

const sidebarMenu = document.getElementById('sidebarMenu');

mainMenu.forEach((main) => {
    sidebarMenu.innerHTML += `
      <li class="scroll-to-link ${main.id !== 'get-started' ? 'menu-title' : 'active'
        }" data-target="${main.id}">
          <a>${main.title}</a>
      </li>`;
    if (main.id !== 'get-started') {
        menuList.forEach((menu) => {
            if (main.id === 'graphql' && menu.id === 'images') return;
            sidebarMenu.innerHTML += `
              <li class="scroll-to-link" data-target="${main.id + menu.id}">
                  <a>${menu.title}</a>
              </li>`;
        });
    }
});

const userCurlResult = `[
            {
            "id": 1,
            "first_name": "Teri",
            "last_name": "Lowell",
            "email": "tlowell0@sun.com",
            "gender": "Female",
            "address": "07 Fordem Drive"
            },
            {
            "id": 2,
            "first_name": "Emelina",
            "last_name": "Turtle",
            "email": "eturtle1@chron.com",
            "gender": "Female",
            "address": "88224 Lukken Avenue"
            },
            {
            "id": 3,
            "first_name": "Huberto",
            "last_name": "Adame",
            "email": "hadame2@linkedin.com",
            "gender": "Male",
            "address": "559 Shoshone Park"
            },
            ...
        ]`;

const jobsCurlResult = `[
            {
                "_id": "1ab41a70-8ce1-4726-ad30-6e65d7dc1bd6",
                "job_title": "Structural Engineer",
                "thumbnail": "http://dummyimage.com/638x634.png/ff4444/ffffff",
                "posted_at": "25-May-2035",
                "views": 75,
                "salary": "$456.01",
                "short_description": "Unsp neph syndrome w diffuse mesangial prolif glomrlneph",
                "long_description": "Repair Right Lobe Liver, Open Approach",
                "apply_url": "http://taobao.com/lacus/purus.html?maecenas=nunc&tincidunt"
            },
            {
                "_id": "d1c24973-de2d-4d01-9eb9-8e464ed312cf",
                "job_title": "Structural Engineer",
                "thumbnail": "http://dummyimage.com/575x136.png/dddddd/000000",
                "posted_at": "24-Jan-2031",
                "views": 1158,
                "salary": "$752.86",
                "short_description": "Spinal enthesopathy, lumbosacral region",
                "long_description": "Drainage of Left Metacarpal, Percutaneous Approach, Diagnostic",
                "apply_url": "https://salon.com/dapibus/nulla/suscipit/ligula/in/lacus/curabitur.png?lacus=rutrum&morbi=nulla&quis=tellus&tortor=in&id=sagittis&nulla"
            },
            {
                "_id": "b4a4f630-12cf-42a5-87fa-459e15a762d9",
                "job_title": "Chemical Engineer",
                "thumbnail": "http://dummyimage.com/663x498.png/cc0000/ffffff",
                "posted_at": "11-May-2091",
                "views": 89,
                "salary": "$674.21",
                "short_description": "Path fx in neopltc dis, unsp femur, subs for fx w nonunion",
                "long_description": "Revision of Cardiac Lead in Heart, Percutaneous Approach",
                "apply_url": "http://zdnet.com/quis/lectus/suspendisse/potenti/in.png?sociis"
            },
            ...
        ]`;

const moviesCurlResult = `[
            {
                "id": "ce9bee30-b09c-4ed0-ada9-5d97bb8466f7",
                "title": "Please Remove Your Shoes ",
                "genres": "Documentary",
                "published": "24-Aug-2015",
                "thumbnail": "http://dummyimage.com/206x434.png/cc0000/ffffff",
                "budget": "$2.2B",
                "box_office_collection": "$8.15B",
                "short_description": "Other acute kidney failure",
                "long_description": "Low Dose Rate (LDR) Brachytherapy of Ovary using Californium 252 (Cf-252)"
            },
            {
                "id": "f840fca8-23a1-45bc-b777-de4d87d14fbf",
                "title": "Cold Creek Manor",
                "genres": "Drama|Thriller",
                "published": "29-Jun-2038",
                "thumbnail": "http://dummyimage.com/652x699.png/ff4444/ffffff",
                "budget": "$3.07B",
                "box_office_collection": "$43.5M",
                "short_description": "Person outsd pk-up/van inj in clsn w statnry object nontraf",
                "long_description": "Bypass Left Ureter to Ileocutaneous with Synthetic Substitute, Percutaneous Endoscopic Approach"
            },
            {
                "id": "79cf3abe-1201-4f2d-b074-c428741acc51",
                "title": "Crips and Bloods: Made in America",
                "genres": "Documentary",
                "published": "27-Feb-2099",
                "thumbnail": "http://dummyimage.com/547x407.png/5fa2dd/ffffff",
                "budget": "$414.73M",
                "box_office_collection": "$324.21M",
                "short_description": "Air embolism in pregnancy, third trimester",
                "long_description": "Destruction of Left Lower Leg Tendon, Open Approach"
            },
            ...
        ]`;

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

const imagesQueryParams = `<tbody>
<tr>
    <td>Dimension</td>
    <td>String</td>
    <td> Width X Height (ie.250X150)</td>
</tr>
<tr>
    <td>Text</td>
    <td>String</td>
    <td>This text words appear on the image, only 1 to 3 characters</td>
</tr>
<tr>
    <td>Text color</td>
    <td>String</td>
    <td>
      (Optional) Only string values ie. 'black','white', 'blue' 
    </td>
</tr>
<tr>
    <td>Background color</td>
    <td>String</td>
    <td>
    (Optional) Only string values ie. 'black','white', 'blue' 
    </td>
</tr>
</tbody>`;

const userBodyParams = `<tbody>
<tr>
    <td>id</td>
    <td>Integer</td>
    <td>Unique identifier for each user.</td>
</tr>
<tr>
    <td>first_name</td>
    <td>String</td>
    <td>(required) user first name</td>
</tr>
<tr>
    <td>last_name</td>
    <td>String</td>
    <td>
        (required) user last name
    </td>
</tr>
<tr>
    <td>email</td>
    <td>String</td>
    <td>
        (required) user email
    </td>
</tr>
<tr>
    <td>gender</td>
    <td>String</td>
    <td>
        (required) user gender:<br>
        Male<br>
        Female
    </td>
</tr>
<tr>
    <td>address</td>
    <td>String</td>
    <td>(required) user address</td>
</tr>
</tbody>`;

const jobsBodyParams = `<tbody>
<tr>
    <td>_id</td>
    <td>String</td>
    <td>Unique identifier for each job.</td>
</tr>
<tr>
    <td>job_title</td>
    <td>String</td>
    <td>(required) job title</td>
</tr>
<tr>
    <td>thumbnail</td>
    <td>String</td>
    <td>
        (optional) job thumbnail
    </td>
</tr>
<tr>
    <td>posted_at</td>
    <td>String</td>
    <td>
        (optional) current date
    </td>
</tr>
<tr>
    <td>views</td>
    <td>String</td>
    <td>
        (read only) job views<br>
    </td>
</tr>
<tr>
    <td>salary</td>
    <td>String</td>
    <td>(required) job salary</td>
</tr>
<tr>
    <td>short_description</td>
    <td>String</td>
    <td>(required) job short description</td>
</tr>
<tr>
    <td>apply_url</td>
    <td>String</td>
    <td>(required) job apply url</td>
</tr>
</tbody>`;

const moviesBodyParams = `<tbody>
<tr>
    <td>id</td>
    <td>String</td>
    <td>Unique identifier for each movie.</td>
</tr>
<tr>
    <td>title</td>
    <td>String</td>
    <td>(required) movie title </td>
</tr>
<tr>
    <td>genres</td>
    <td>String</td>
    <td>
        (required) movie genres
    </td>
</tr>
<tr>
    <td>published</td>
    <td>String</td>
    <td>
        (optional) movie published
    </td>
</tr>
<tr>
    <td>thumbnail</td>
    <td>String</td>
    <td>
        (optional) movie thumbnail
    </td>
</tr>
<tr>
    <td>budget</td>
    <td>String</td>
    <td>(optional) movie budget</td>
</tr>
<tr>
    <td>box_office_collection</td>
    <td>String</td>
    <td>(optional) movie box office collection</td>
</tr>
<tr>
    <td>short_description</td>
    <td>String</td>
    <td>(required) movie short_description</td>
</tr>
<tr>
    <td>long_description</td>
    <td>String</td>
    <td>(optional) movie long_description</td>
</tr>
</tbody>`;

const usersGraphqlQuery = `
    {
        users{
            id
            first_name
            last_name
            email
            gender
            address
        }
    }`;

const jobsGraphqlQuery = `
    {
        jobs {
            _id
            job_title
            thumbnail
            posted_at
            views
            salary
            short_description
            long_description
            apply_url
        }
    }`;

const moviesGraphqlQuery = `
    {
        movies {
            id
            title
            genres
            published
            thumbnail
            budget
            box_office_collection
            short_description
            long_description
        }
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

const mainContent = document.getElementById('menu-body');
mainContent.innerHTML = '';
mainMenu.forEach((main) => {
    //   Get started
    if (main.id === 'get-started') {
        mainContent.innerHTML += `<div class="overflow-hidden content-section" id="${main.id}">
            <h1>Get started</h1>
            <pre>API Endpoint
            https://mockx-api.herokuapp.com/rest-api/v1/
            https://mockx-api.herokuapp.com/graphql/v1/
            </pre>
            <p>
                Free fake <strong>REST API</strong> and <strong>GRAPHQL</strong> for testing and prototyping. 
            </p>  
            <p>
            https://mockx-api.herokuapp.com/ is a free online <strong>REST API</strong> as well as <strong>GRAPHQL</strong> that you can use whenever you need some fake data. It can be in a README on GitHub, simply to test things locally.
            This site is for study and practice purpose only,
            All data in this site is fake does not belong to anyone
            </p>   
            <p> 
            The credit for this website design goes to <a href="https://github.com/floriannicolas">Floriannicolas</a> and <a href="https://github.com/CoderX707">CoderX707</a> for the backend functionality.
            Thanks for the fake data <a href="https://www.mockaroo.com/">www.mockaroo.com</a>.
            </p>   
            <p><strong>NOTE: </strong>If you want to improve our project please do it, On right side we have provided github link.</p>
        </div>`;
    }
    //   What is Rest API
    if (main.id === 'rest-api') {
        mainContent.innerHTML += `<div class="overflow-hidden content-section" id="${main.id}">
            <h1>Rest API</h1>
            <pre>API Endpoint
            https://mockx-api.herokuapp.com/rest-api/v1/
            </pre>
            <p>
            REpresentational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.
            REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. It’s used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request. 
            </p>   
        </div>`;
    }
    //   What is GraphQL
    if (main.id === 'graphql') {
        mainContent.innerHTML += `<div class="overflow-hidden content-section" id="${main.id}">
            <h1>graphql</h1>
            <pre>API Endpoint
            https://mockx-api.herokuapp.com/graphql/v1/
            </pre>
            <p>
            GraphQL is a query language and server-side runtime for application programming interfaces (APIs) that prioritizes giving clients exactly the data they request and no more. 
            GraphQL is designed to make APIs fast, flexible, and developer-friendly. It can even be deployed within an integrated development environment (IDE) known as GraphiQL.
            </p>   
        </div>`;
    }
    //   Rest API body content
    if (main.id !== 'get-started' && main.id === 'rest-api') {
        menuList.forEach((menu) => {
            mainContent.innerHTML += `<div class="overflow-hidden content-section" id="${main.id + menu.id
                }">
        <h2>${menu.title}</h2>
        <pre><code class="bash">
          # Here is a curl example
          curl --location --request GET 'https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id
                }' \
          --header 'Content-Type: application/json' \
          --header 'Accept: application/json'
         </code></pre>
        
        ${menu.id === 'images' ?
                    `<p>
            For get ${menu.id} use following url and methods :<br>
            <span class="method-bold">
        
            Random ${menu.id.slice(0, -1) + ''} [ <a href="https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id}">GET</a> ]:<br/> <code
                class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                    }/v1/${menu.id}</code>
            <br>
            ${menu.id.slice(0, -1) + ''} by Dimension and Text [ GET ]:<br/> 
            <code class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id}/:widthXheight/:text</code>
            <br>
            ${menu.id.slice(0, -1) + ''} by Dimension, Text with Text color and Background color [ GET ]:<br/> 
            <code class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id}/:widthXheight/:text/:textColor/:backgroundColor</code>
            <br>
            </span>
            </p>`
                    : menu.id === 'currency' ? `<p>
                For ${menu.id} CRUD oprations use following url and methods :<br>
                <span class="method-bold">
                    All ${menu.id} [ <a href="https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id}">GET</a> ]:<br/> <code
                        class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}</code>
                </span>
            </p>`
                        :
                        `<p>
            For ${menu.id} CRUD oprations use following url and methods :<br>
            <span class="method-bold">
        
                All ${menu.id} [ <a href="https://mockx-api.herokuapp.com/${main.id}/v1/${menu.id}">GET</a> ]:<br/> <code
                    class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}</code>
                <br>
                ${menu.id.slice(0, -1) + ''} by
                id [ GET ]:<br/> <code class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}/:id</code>
                <br>
                Create ${menu.id.slice(0, -1) + ''} [ POST ]:<br/> <code
                    class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}</code>
                <br>
                Update ${menu.id.slice(0, -1) + ''} [ PATCH ]:<br/> <code
                    class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}/:id</code>
                <br>
                Delete ${menu.id.slice(0, -1) + ''} [ DELETE ]:<br/> <code
                    class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                        }/v1/${menu.id}/:id</code>
                <br>
            </span>
        </p>`
                }
            
        <br>
        <pre><code class="json">
        Result example :
        ${menu.id === 'users'
                    ? userCurlResult
                    : menu.id === 'jobs'
                        ? jobsCurlResult
                        : menu.id === 'movies'
                            ? moviesCurlResult
                            : menu.id === 'images' ? "" : currencyCurlResult
                }
         </code></pre>
        <h4>${menu.id === 'images' ? 'QUERY' : 'BODY'} PARAMETERS</h4>
        <table class="central-overflow-x">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            ${menu.id === 'users'
                    ? userBodyParams
                    : menu.id === 'jobs'
                        ? jobsBodyParams
                        : menu.id === 'movies'
                            ? moviesBodyParams
                            : menu.id === 'images' ?
                                imagesQueryParams : ''
                }
        </table>
        </div>`;
        });
    }
    //   GraphQL body content
    else if (main.id !== 'get-started' && main.id === 'graphql') {
        menuList.forEach((menu) => {
            if (main.id === 'graphql' && menu.id === 'images') return;
            mainContent.innerHTML += `<div class="overflow-hidden content-section" id="${main.id + menu.id
                }">
        <h2>${menu.title}</h2>
        <pre><code class="bash">
          # Here is a query example
            ${menu.id === 'users'
                    ? usersGraphqlQuery
                    : menu.id === 'jobs'
                        ? jobsGraphqlQuery
                        : menu.id === 'movies'
                            ? moviesGraphqlQuery
                            : currencyGraphqlQuery
                }
         </code></pre>
        <p>
            For ${menu.id} CRUD oprations use following url <a href="https://mockx-api.herokuapp.com/graphql/v1/${menu.id}">playground</a>:<br>
            <span class="method-bold">
               [ GET ]: <code
                    class="higlighted break-word">https://mockx-api.herokuapp.com/${main.id
                }/v1/${menu.id}</code>
            </span>
        </p>
        <br>
        <h4>BODY PARAMETERS</h4>
        <table class="central-overflow-x">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            ${menu.id === 'users'
                    ? userBodyParams
                    : menu.id === 'jobs'
                        ? jobsBodyParams
                        : menu.id === 'movies'
                            ? moviesBodyParams
                            : ''
                }
        </table>
        <pre><code class="json">
        Result example :
        ${menu.id === 'users'
                    ? userCurlResult
                    : menu.id === 'jobs'
                        ? jobsCurlResult
                        : menu.id === 'movies'
                            ? moviesCurlResult
                            : currencyCurlResult
                }
         </code></pre>
        </div>`;
        });
    }
});
