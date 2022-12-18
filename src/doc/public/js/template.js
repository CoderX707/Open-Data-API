// html dynamic ui

const mainMenu = [
    { id: 'get-started', title: 'Get Started' },
    { id: 'rest-api', title: 'REST API' },
    { id: 'graphql', title: 'GraphQL' },
];

const menuList = [
    { id: 'images', title: 'Images' },
    { id: 'currency', title: 'Currency Exchange Rate' },
    { id: 'weather', title: 'Weather' },
    { id: 'auth', title: 'Authentication' },
    { id: 'users', title: 'Users' },
    { id: 'products', title: 'Products' },
    { id: 'jobs', title: 'Jobs' },
    { id: 'movies', title: 'Movies' },
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

const mainContent = document.getElementById('menu-body');
mainContent.innerHTML = '';
mainMenu.forEach((main) => {
    //   Get started
    if (main.id === 'get-started') {
        mainContent.innerHTML += getStartedContent(main.id)
    }
    //   What is Rest API
    if (main.id === 'rest-api') {
        mainContent.innerHTML += restApi(main.id)
    }
    //   What is GraphQL
    if (main.id === 'graphql') {
        mainContent.innerHTML += graphQL(main.id)
    }
    //   Rest API body content
    if (main.id !== 'get-started' && main.id === 'rest-api') {
        menuList.forEach((menu) => {
            mainContent.innerHTML += `${headingAndRequestUrl(menu, main.id)}
        
        ${menu.id === 'images'
                    ? imagesOprations(menu.id, main.id)
                    : menu.id === 'currency'
                        ? currencyOprations(menu.id, main.id)
                        : menu.id === 'auth'
                            ? authOprations(menu.id, main.id)
                            : menu.id === 'weather'
                                ? weatherOprations(menu.id, main.id)
                                : curdOprationLinks(menu.id, main.id)}
            
        <br>
        <pre><code class="json">
Result example :
        ${menu.id === 'users'
                    ? userCurlResult
                    : menu.id === 'jobs'
                        ? jobsCurlResult
                        : menu.id === 'products'
                            ? productsCurlResult
                            : menu.id === 'movies'
                                ? moviesCurlResult
                                : menu.id === 'images'
                                    ? "Result cannot can be preview"
                                    : menu.id === 'currency'
                                        ? currencyCurlResult
                                        : menu.id === 'auth'
                                            ? authCurlResult
                                            : menu.id === 'weather'
                                                ? weatherCurlResult : ''
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
                        : menu.id === 'products'
                            ? productsBodyParams
                            : menu.id === 'movies'
                                ? moviesBodyParams
                                : menu.id === 'images'
                                    ? imagesQueryParams
                                    : menu.id === 'auth'
                                        ? authBodyParams
                                        : ''
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
                        : menu.id === 'products'
                            ? productsGraphqlQuery
                            : menu.id === 'movies'
                                ? moviesGraphqlQuery
                                : menu.id === 'auth'
                                    ? authGraphqlQuery
                                    : menu.id === 'weather'
                                        ? weatherGraphqlQuery
                                        : menu.id === 'currency' ? currencyGraphqlQuery : ''

                }
         </code></pre>
        ${menu.id === 'currency' ? currencyGraphQL(menu.id, main.id) :
                    menu.id === 'auth' ? authGraphQL(menu.id, main.id) :
                        menu.id === 'weather' ? weatherGraphQL(menu.id, main.id) :
                            `<p>
            For ${menu.id} CRUD oprations use following url <a target="_blank" href="https://open-data.ssovee.com/graphql/v1/${menu.id}">playground</a>:<br>
            <span class="method-bold">
               [ GET ]: <code
                    class="higlighted break-word">https://open-data.ssovee.com/${main.id
                            }/v1/${menu.id}</code>
            </span>
        </p>`}
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
                        : menu.id === 'products'
                            ? productsBodyParams
                            : menu.id === 'movies'
                                ? moviesBodyParams
                                : menu.id === 'auth'
                                    ? authBodyParams
                                    : ""
                }
        </table>
        <pre><code class="json">
        Result example :
        ${menu.id === 'users'
                    ? userCurlResult
                    : menu.id === 'jobs'
                        ? jobsCurlResult
                        : menu.id === 'products'
                            ? productsCurlResult
                            : menu.id === 'movies'
                                ? moviesCurlResult
                                : menu.id === 'currency'
                                    ? currencyCurlResult
                                    : menu.id === 'weather'
                                        ? weatherCurlResult : ''
                }
         </code></pre>
        </div>`;
        });
    }
});
