<!-- TOC -->

- [1. API Documentation](#1-api-documentation)
  - [1.1. GET /api/products](#11-get-apiproducts)
    - [1.1.1. Expected parameters](#111-expected-parameters)
    - [1.1.2. Example Response](#112-example-response)
  - [1.2. POST /api/products](#12-post-apiboards)
    - [1.2.1. Expected Payload](#121-expected-payload)
    - [1.2.2. Successful Response](#122-successful-response)
      - [1.2.2.1. Example Response](#1221-example-response)
  - [1.3. PUT /api/products/:id](#13-put-getproductsid)
    - [1.3.1. Expected Payload](#131-expected-payload)
    - [1.3.2. Successful Response](#132-successful-response)
      - [1.3.2.1. Example Response](#1321-example-response)
  - [1.4. POST /api/product/:id](#14-delete-apiproductsid)
    - [1.4.1. Expected Payload](#141-expected-payload)
    - [1.4.2. Successful Response](#142-successful-response)
      - [1.4.2.1. Example Response](#1421-example-response)
  - [1.5. GET /api/cart/](#15-get-apicart)
    - [1.5.1. Expected Payload](#171-expected-payload)
    - [1.5.2. Successful Response](#172-successful-response)
      - [1.5.2.1. Example Response](#1721-example-response)
  - [1.6. POST /api/checkout](#16-post-apicheckout)
    - [1.6.1. Expected Payload](#181-expected-payload)
    - [1.6.2. Successful Response](#182-successful-response)
      - [1.6.2.1. Example Response](#1821-example-response)
  - [1.7. POST /api/add-to-cart](#17-post-apiadd-to-cart)
    - [1.7.1. Expected Payload](#191-expected-payload)
    - [1.7.2. Successful Response](#192-successful-response)
      - [1.7.2.1. Example Response](#1921-example-response)

<!-- /TOC -->

# 1. API Documentation

## 1.1. GET /api/products

Get all products from the database.

### 1.1.1. Expected parameters

None

### 1.1.2. Example Response

```json
[
  {
    "_id": "61d754d72092473d55a809e1",
    "title": "Kindle",
    "price": 50,
    "quantity": 2,
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  },
  {
    "_id": "51d754d72092473333a809e1",
    "title": "Mac Mini",
    "price": 850,
    "quantity": 7,
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  }
]
```

## 1.2. POST /api/products

Creates a product.

### 1.2.1. Expected Payload

```json
{
  "title": "Keyboard",
  "price": 50,
  "quantity": 3
}
```

### 1.2.2. Successful Response

The new product is returned in JSON format.

#### 1.2.2.1. Example Response

```json
{
  "_id": "61d754d72092473d55a809e1",
  "title": "Keyboard",
  "price": 50,
  "quantity": 3,
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z",
  "_v": 0
}
```

## 1.3. PUT /api/products/:id

Updates the product with the given `id`.

### 1.3.1. Expected Payload

```json
{
  "title": "Keyboard",
  "price": 50,
  "quantity": 5
}
```

### 1.3.2. Successful Response

The updated product is returned.

#### 1.3.2.1. Example Response

```json
{
  "_id": "61d754d72092473d55a809e1",
  "title": "Keyboard",
  "price": 50,
  "quantity": 5,
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z",
  "_v": 0
}
```

## 1.4. DELETE /api/products/:id

Deletes a product

### 1.4.1. Expected Payload

None

### 1.4.2. Successful Response

Empty response body

#### 1.4.2.1. Example Response

```json

```

## 1.5. GET /api/cart

Get cart Items

### 1.5.1. Expected Payload

None

### 1.5.2. Successful Response

The cart items are returned in JSON format.

#### 1.5.2.1. Example Response

```json
[
  {
    "_id": "545454f72092473d55a809e1",
    "title": "Kindle",
    "price": 50,
    "quantity": 1,
    "productId": "61d754d72092473d55a809e1",
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  },
  {
    "_id": "51d754d72092473333a809e1",
    "title": "Mac Mini",
    "price": 850,
    "quantity": 2,
    "productId": "51d754d72092473333a809e1",
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  }
]
```

## 1.6. POST /api/checkout

Removes items from the cart

### 1.6.1. Expected Payload

None

### 1.6.2. Successful Response

Empty json body

#### 1.6.2.1. Example Response

```json

```

## 1.7. POST /api/add-to-cart

Adds the item to the cart (reduces the quantity in shop and adds it to the cart or updates its quantity there)

### 1.7.1. Expected Payload

`productId`

### 1.7.2. Successful Response

Updated product and item are returned wrapped in an object.

#### 1.7.2.1. Example Response

```json
{ "product": {
  {
    "_id": "51d754d72092473333a809e1",
    "title": "Mac Mini",
    "price": 850,
    "quantity": 6,
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  },
  "item": {
  {
    "_id": "51d754d72092473333a809e1",
    "title": "Mac Mini",
    "price": 850,
    "quantity": 3,
    "productId": "51d754d72092473333a809e1",
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z",
    "_v": 0
  }
  }
}
```
