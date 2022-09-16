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

function imagesOprations(menuId,mainId) {
    return (`<p>
    For get ${menuId} use following url and methods :<br>
    <span class="method-bold">

    Random ${menuId.slice(0, -1) + ''} [ <a target="_blank" href="https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}">GET</a> ]:<br/> <code
        class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId
            }/v1/${menuId}</code>
    <br>
    ${menuId.slice(0, -1) + ''} by Dimension and Text [ GET ]:<br/> 
    <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}/:widthXheight/:text</code>
    <br>
    ${menuId.slice(0, -1) + ''} by Dimension, Text with Text color and Background color [ GET ]:<br/> 
    <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}/:widthXheight/:text/:textColor/:backgroundColor</code>
    <br>
    </span>
    </p>`
             )
}