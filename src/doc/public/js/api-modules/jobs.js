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
