const authCurlResult = `
{
    "user": {
        "id": 3,
        "first_name": "Huberto",
        "last_name": "Adame",
        "email": "hadame2@linkedin.com",
        "gender": "Male",
        "address": "559 Shoshone Park",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiSHViZXJ0byIsImxhc3RfbmFtZSI6IkFkYW1lIiwiZW1haWwiOiJoYWRhbWUyQGxpbmtlZGluLmNvbSIsImdlbmRlciI6Ik1hbGUiLCJhZGRyZXNzIjoiNTU5IFNob3Nob25lIFBhcmsifSwiaWF0IjoxNjYzMzI0NDI4LCJleHAiOjE2NjMzMzE2Mjh9.dsR8Z0PKhjfDurxMHm75pXNMKNM-9qdButtZvkZNYJ8"
    },
    "message": "user login successful"
}`;

const authGraphqlQuery = `
    mutation {
        loginUser(email: "hadame2@linkedin.com", password: "hadame2@linkedin.com") {
        user {
            id
            first_name
            last_name
            email
        }
        message
        }
    }`;

const authBodyParams = `<tbody>
<tr>
    <td>first_name</td>
    <td>String</td>
    <td>User first name</td>
</tr>
<tr>
    <td>last_name</td>
    <td>String</td>
    <td>User last name</td>
</tr>

<tr>
    <td>Email</td>
    <td>String</td>
    <td>(required) email</td>
</tr>
<tr>
    <td>Password</td>
    <td>String</td>
    <td>(required) use email as password</td>
</tr>
</tbody>`;

function authOprations(menuId, mainId) {
    return (`<p>
    For ${menuId} oprations use following url and methods :<br>
    <span class="method-bold">
        Check ${menuId} [ <a target="_blank" href="https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}">GET</a> ]:<br/> 
        <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}</code>
        <br>
        Register ${menuId} [ POST ]:<br/> 
        <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}/register</code>
        <br>
        Login ${menuId} [ POST ]:<br/> 
        <code class="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}/login</code>
        <br>
    </span>
</p>`);
}

function authGraphQL(menuId, mainId) {
    return (`<p>
    For ${menuId} oprations use following url <a target="_blank" href="https://mockx-api.herokuapp.com/graphql/v1/${menuId}">playground</a>:<br>
    <span class="method-bold">
       [ GET ]: <codeclass="higlighted break-word">https://mockx-api.herokuapp.com/${mainId}/v1/${menuId}</code>
    </span>
</p>`);
}