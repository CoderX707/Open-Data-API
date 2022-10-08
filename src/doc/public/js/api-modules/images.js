const imagesQueryParams = `<tbody>
<tr>
    <td>text</td>
    <td>String</td>
    <td>(Optional) This text words appear on the image, only 2 characters</td>
</tr>
<tr>
    <td>color</td>
    <td>String</td>
    <td>
      (Optional) Only string values ie. 'MistyRose','white', 'LimeGreen' 
    </td>
</tr>
<tr>
    <td>backgroundColor</td>
    <td>String</td>
    <td>
    (Optional) Only string values ie. 'black','Linen', 'MediumVioletRed' 
    </td>
</tr>
<tr>
    <td>width</td>
    <td>Numbers</td>
    <td>(Optional) Default width 400px (i.e. 200,300,600)</td>
</tr>
<tr>
    <td>height</td>
    <td>Numbers</td>
    <td>(Optional) Default height 300px (i.e. 200,300,600)</td>
</tr>
</tbody>`;

function imagesOprations(menuId, mainId) {
    return (`<p>
    For get ${menuId} use following url and methods :<br>
    <span class="method-bold">

    Random ${menuId.slice(0, -1) + ''} [ <a target="_blank" href="https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}">GET</a> ]:<br/> <code
        class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId
        }/v1/${menuId}</code>
    <br>
    ${menuId.slice(0, -1) + ''} by query [ <a target="_blank" href="https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}?text=text&height=300&width=400&color=NavajoWhite&backgroundColor=black">GET</a> ]:<br/> 
    <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}?text=text&height=300&width=400&color=NavajoWhite&backgroundColor=black
    </code>
    <br>
    </p>`
    )
}