const productsCurlResult = `
[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://mockx-api.herokuapp.com/images/products/1/thumbnail.jpg",
        "images": [
            "https://mockx-api.herokuapp.com/images/products/1/1.jpg",
            "https://mockx-api.herokuapp.com/images/products/1/2.jpg",
            "https://mockx-api.herokuapp.com/images/products/1/3.jpg",
            "https://mockx-api.herokuapp.com/images/products/1/4.jpg",
            "https://mockx-api.herokuapp.com/images/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://mockx-api.herokuapp.com/images/products/2/thumbnail.jpg",
        "images": [
            "https://mockx-api.herokuapp.com/images/products/2/1.jpg",
            "https://mockx-api.herokuapp.com/images/products/2/2.jpg",
            "https://mockx-api.herokuapp.com/images/products/2/3.jpg",
            "https://mockx-api.herokuapp.com/images/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://mockx-api.herokuapp.com/images/products/3/thumbnail.jpg",
        "images": [
            "https://mockx-api.herokuapp.com/images/products/3/1.jpg"
        ]
    }
    ...
]`;

const productsBodyParams = `<tbody>
<tr>
    <td>id</td>
    <td>String</td>
    <td>Unique identifier for each product.</td>
</tr>
<tr>
    <td>title</td>
    <td>String</td>
    <td>(required) product title</td>
</tr>
<tr>
    <td>description</td>
    <td>String</td>
    <td>
    (required) product description
    </td>
</tr>
<tr>
    <td>brand</td>
    <td>String</td>
    <td>
    (required) product brand
    </td>
</tr>
<tr>
    <td>category</td>
    <td>String</td>
    <td>
    (required) product category
    </td>
</tr>
<tr>
    <td>price</td>
    <td>Integer</td>
    <td>(required) greater than 1</td>
</tr>
<tr>
    <td>stock</td>
    <td>Integer</td>
    <td>(required) greater than 1</td>
</tr>
<tr>
    <td>thumbnail</td>
    <td>String</td>
    <td>Default auto generated</td>
</tr>

</tbody>`;


const productsGraphqlQuery = `
    {
        products {
        id
        title
        description
        thumbnail
        images
        }
    }
  `;
