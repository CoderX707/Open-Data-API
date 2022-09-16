function curdOprationLinks(id, mainId) {
    return (`<p>
    For ${id} CRUD oprations use following url and methods :<br>
    <span class="method-bold">
        All ${id} [ <a target="_blank" href="https://mockx-api.herokuapp.com/${mainId}/v1/${id}">GET</a> ]:<br/> <code
            class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${id}</code>
        <br>
        ${id.slice(0, -1) + ''} by
        id [ GET ]:<br/> <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${id}/:id</code>
        <br>
        Create ${id.slice(0, -1) + ''} [ POST ]:<br/> <code
            class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${id}</code>
        <br>
        Update ${id.slice(0, -1) + ''} [ PATCH ]:<br/> <code
            class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${id}/:id</code>
        <br>
        Delete ${id.slice(0, -1) + ''} [ DELETE ]:<br/> <code
            class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${id}/:id</code>
        <br>
    </span>
</p>`);
}

function headingAndRequestUrl(menu, mainId) {
    return (`<div class="overflow-hidden content-section" id="${mainId + menu.id}">
    <h2>${menu.title}</h2>
    <pre><code class="bash">
    # Here is a curl example
    curl --location --request GET 'https://mockx-api.herokuapp.com/${mainId}/v1/${menu.id}' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json'
    </code></pre>`);
}