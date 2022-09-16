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