const userCurlResult = `
[
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
]
`;

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

