import { Product, Transaction } from "./types";

export const MOCK_PRODUCTS: Product[] = [
    {
        "id": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
        "name": "India Gate Basmati Rice 1kg",
        "sellingPrice": 180.0,
        "costPrice": 150.0,
        "stockQuantity": 41,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "40b865e6-e061-4159-b046-9e609e5c15ef",
        "name": "Tata Sampann Toor Dal 1kg",
        "sellingPrice": 140.0,
        "costPrice": 115.0,
        "stockQuantity": 48,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
        "name": "Fortune Sunflower Oil 1L",
        "sellingPrice": 135.0,
        "costPrice": 120.0,
        "stockQuantity": 73,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
        "name": "Amul Taaza Milk 500ml",
        "sellingPrice": 28.0,
        "costPrice": 25.0,
        "stockQuantity": 41,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
        "name": "Britannia Daily Bread 400g",
        "sellingPrice": 45.0,
        "costPrice": 35.0,
        "stockQuantity": 128,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "274cc576-d960-42f5-aea0-2b5df2141123",
        "name": "Taj Mahal Tea 250g",
        "sellingPrice": 160.0,
        "costPrice": 135.0,
        "stockQuantity": 33,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "8c151356-4776-4089-ac1c-fa7b4a538f31",
        "name": "Madhur Pure Sugar 1kg",
        "sellingPrice": 55.0,
        "costPrice": 45.0,
        "stockQuantity": 100,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "2ac847e4-76ce-4060-a06d-a2708308bbed",
        "name": "Tata Salt 1kg",
        "sellingPrice": 25.0,
        "costPrice": 20.0,
        "stockQuantity": 116,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
        "name": "Parle-G Gold Biscuits 1kg",
        "sellingPrice": 90.0,
        "costPrice": 75.0,
        "stockQuantity": 77,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "88bb8de3-34dc-487e-833c-e78872ca8a20",
        "name": "Dettol Original Soap 125g",
        "sellingPrice": 50.0,
        "costPrice": 40.0,
        "stockQuantity": 66,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "89ae6b74-ed66-48ca-8c72-16dc90847017",
        "name": "Maggi 2-Minute Noodles 140g",
        "sellingPrice": 30.0,
        "costPrice": 25.0,
        "stockQuantity": 36,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    },
    {
        "id": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
        "name": "Aashirvaad Atta 5kg",
        "sellingPrice": 240.0,
        "costPrice": 210.0,
        "stockQuantity": 83,
        "trackStock": true,
        "createdAt": "2026-02-21T02:05:11.524155Z",
        "updatedAt": "2026-02-21T02:05:11.524155Z"
    }
];

export const MOCK_TRANSACTIONS = [
    {
        "id": "03f7bd70-6567-442d-b1d7-c2c585a2aba6",
        "totalAmount": 570.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-21T17:00:53.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 3,
                "priceAtSale": 180.0,
                "total": 540.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 1,
                "priceAtSale": 30.0,
                "total": 30.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            }
        ]
    },
    {
        "id": "24cc7fad-89f3-4d8f-b405-c88ffccb805b",
        "totalAmount": 445.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-21T17:59:42.524155Z",
        "items": [
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 1,
                "priceAtSale": 25.0,
                "total": 25.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 3,
                "priceAtSale": 140.0,
                "total": 420.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "2865d102-010c-4a2f-94be-598fc1ab2236",
        "totalAmount": 180.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-21T15:09:18.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 1,
                "priceAtSale": 180.0,
                "total": 180.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            }
        ]
    },
    {
        "id": "7e90bdd7-f28d-4aa4-b67f-fe4e1c221ff3",
        "totalAmount": 1010.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-20T10:10:49.524155Z",
        "items": [
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 2,
                "priceAtSale": 55.0,
                "total": 110.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 3,
                "priceAtSale": 240.0,
                "total": 720.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 1,
                "priceAtSale": 180.0,
                "total": 180.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            }
        ]
    },
    {
        "id": "6a1b9d26-3f85-4827-a8a7-a1f57b2e5e80",
        "totalAmount": 355.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-20T12:29:09.524155Z",
        "items": [
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 3,
                "priceAtSale": 30.0,
                "total": 90.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 1,
                "priceAtSale": 25.0,
                "total": 25.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 2,
                "priceAtSale": 45.0,
                "total": 90.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 3,
                "priceAtSale": 50.0,
                "total": 150.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            }
        ]
    },
    {
        "id": "854b0cb4-86fd-453c-a277-2a1e190130a0",
        "totalAmount": 1125.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T09:39:11.524155Z",
        "items": [
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 3,
                "priceAtSale": 50.0,
                "total": 150.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 3,
                "priceAtSale": 30.0,
                "total": 90.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 3,
                "priceAtSale": 135.0,
                "total": 405.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 2,
                "priceAtSale": 240.0,
                "total": 480.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            }
        ]
    },
    {
        "id": "f74199c6-5c62-40b4-91e7-ef89b6acf332",
        "totalAmount": 580.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T11:43:49.524155Z",
        "items": [
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 2,
                "priceAtSale": 140.0,
                "total": 280.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            },
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 1,
                "priceAtSale": 90.0,
                "total": 90.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 2,
                "priceAtSale": 25.0,
                "total": 50.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 1,
                "priceAtSale": 160.0,
                "total": 160.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            }
        ]
    },
    {
        "id": "a71d9c01-5fe8-4712-933d-a1fccda5b60b",
        "totalAmount": 25.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-20T09:54:37.524155Z",
        "items": [
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 1,
                "priceAtSale": 25.0,
                "total": 25.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            }
        ]
    },
    {
        "id": "0b6f5e38-7372-4055-a9b2-5b6b3b36c7db",
        "totalAmount": 455.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-19T08:23:54.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 1,
                "priceAtSale": 180.0,
                "total": 180.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 1,
                "priceAtSale": 135.0,
                "total": 135.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 1,
                "priceAtSale": 140.0,
                "total": 140.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "aa895ae4-0259-4536-9728-c23cd00cb5f1",
        "totalAmount": 718.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-19T09:02:29.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 1,
                "priceAtSale": 180.0,
                "total": 180.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 1,
                "priceAtSale": 28.0,
                "total": 28.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 2,
                "priceAtSale": 45.0,
                "total": 90.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 3,
                "priceAtSale": 140.0,
                "total": 420.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "5ec34af0-8a57-4bc0-83dd-c89573d20b87",
        "totalAmount": 6518.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T09:47:22.524155Z",
        "items": [
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 6,
                "priceAtSale": 25.0,
                "total": 150.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 8,
                "priceAtSale": 90.0,
                "total": 720.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 6,
                "priceAtSale": 180.0,
                "total": 1080.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 8,
                "priceAtSale": 30.0,
                "total": 240.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 6,
                "priceAtSale": 55.0,
                "total": 330.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 7,
                "priceAtSale": 50.0,
                "total": 350.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 8,
                "priceAtSale": 160.0,
                "total": 1280.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 8,
                "priceAtSale": 135.0,
                "total": 1080.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 6,
                "priceAtSale": 28.0,
                "total": 168.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 8,
                "priceAtSale": 140.0,
                "total": 1120.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "1b9b5135-0f46-40e7-aa45-8f9649f24ff2",
        "totalAmount": 530.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T17:08:59.524155Z",
        "items": [
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 2,
                "priceAtSale": 50.0,
                "total": 100.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 3,
                "priceAtSale": 55.0,
                "total": 165.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 1,
                "priceAtSale": 240.0,
                "total": 240.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 1,
                "priceAtSale": 25.0,
                "total": 25.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            }
        ]
    },
    {
        "id": "2c2a7fb8-b60d-4a28-a04b-7fc7b0b8eb63",
        "totalAmount": 6305.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T12:09:04.524155Z",
        "items": [
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 8,
                "priceAtSale": 90.0,
                "total": 720.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 5,
                "priceAtSale": 28.0,
                "total": 140.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 5,
                "priceAtSale": 45.0,
                "total": 225.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 6,
                "priceAtSale": 180.0,
                "total": 1080.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 8,
                "priceAtSale": 30.0,
                "total": 240.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 6,
                "priceAtSale": 160.0,
                "total": 960.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 4,
                "priceAtSale": 55.0,
                "total": 220.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 3,
                "priceAtSale": 140.0,
                "total": 420.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 5,
                "priceAtSale": 135.0,
                "total": 675.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 7,
                "priceAtSale": 25.0,
                "total": 175.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 5,
                "priceAtSale": 50.0,
                "total": 250.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 5,
                "priceAtSale": 240.0,
                "total": 1200.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            }
        ]
    },
    {
        "id": "0e9b5b58-65a4-431d-b185-622abaa9ec39",
        "totalAmount": 705.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-18T08:35:54.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 1,
                "priceAtSale": 180.0,
                "total": 180.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 1,
                "priceAtSale": 25.0,
                "total": 25.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 2,
                "priceAtSale": 160.0,
                "total": 320.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 2,
                "priceAtSale": 90.0,
                "total": 180.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            }
        ]
    },
    {
        "id": "3f62b4fd-3039-4931-ab7e-5d5f9ebd7548",
        "totalAmount": 660.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-18T16:00:08.524155Z",
        "items": [
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 2,
                "priceAtSale": 25.0,
                "total": 50.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 2,
                "priceAtSale": 45.0,
                "total": 90.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 2,
                "priceAtSale": 50.0,
                "total": 100.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 3,
                "priceAtSale": 140.0,
                "total": 420.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "6d2406e0-026e-4f6c-9bfb-a1b53904872b",
        "totalAmount": 815.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-18T20:44:48.524155Z",
        "items": [
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 1,
                "priceAtSale": 90.0,
                "total": 90.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 3,
                "priceAtSale": 45.0,
                "total": 135.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 2,
                "priceAtSale": 55.0,
                "total": 110.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 3,
                "priceAtSale": 160.0,
                "total": 480.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            }
        ]
    },
    {
        "id": "c876089f-f586-4ff0-93ef-41089646df99",
        "totalAmount": 80.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-17T15:44:59.524155Z",
        "items": [
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 1,
                "priceAtSale": 30.0,
                "total": 30.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 1,
                "priceAtSale": 50.0,
                "total": 50.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            }
        ]
    },
    {
        "id": "a0cefbe2-35c1-4a33-a8bc-2fa7621aa3ee",
        "totalAmount": 339.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T20:46:14.524155Z",
        "items": [
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 3,
                "priceAtSale": 55.0,
                "total": 165.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 2,
                "priceAtSale": 45.0,
                "total": 90.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 3,
                "priceAtSale": 28.0,
                "total": 84.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            }
        ]
    },
    {
        "id": "97f8ae66-a228-4761-8c79-35870a20ad86",
        "totalAmount": 555.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T20:26:41.524155Z",
        "items": [
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 2,
                "priceAtSale": 25.0,
                "total": 50.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 2,
                "priceAtSale": 50.0,
                "total": 100.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 3,
                "priceAtSale": 135.0,
                "total": 405.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            }
        ]
    },
    {
        "id": "974ebc9e-e2b5-43ee-84cc-2f854f6729d0",
        "totalAmount": 390.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T14:54:59.524155Z",
        "items": [
            {
                "productId": "b9042628-fc10-4a6e-8abd-fbfc987811a4",
                "quantity": 1,
                "priceAtSale": 45.0,
                "total": 45.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 1,
                "priceAtSale": 55.0,
                "total": 55.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 1,
                "priceAtSale": 240.0,
                "total": 240.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "productId": "2ac847e4-76ce-4060-a06d-a2708308bbed",
                "quantity": 2,
                "priceAtSale": 25.0,
                "total": 50.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            }
        ]
    },
    {
        "id": "bd9ac1b8-7f7a-4ff5-bc3e-c393f958722f",
        "totalAmount": 470.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T18:30:54.524155Z",
        "items": [
            {
                "productId": "274cc576-d960-42f5-aea0-2b5df2141123",
                "quantity": 2,
                "priceAtSale": 160.0,
                "total": 320.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 3,
                "priceAtSale": 50.0,
                "total": 150.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            }
        ]
    },
    {
        "id": "2f4ac904-60f3-45a8-aa78-fe49ec53da28",
        "totalAmount": 470.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-16T15:32:04.524155Z",
        "items": [
            {
                "productId": "d5289ca7-3bbd-4e27-a3b3-5397019318bb",
                "quantity": 1,
                "priceAtSale": 240.0,
                "total": 240.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 1,
                "priceAtSale": 50.0,
                "total": 50.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "89ae6b74-ed66-48ca-8c72-16dc90847017",
                "quantity": 3,
                "priceAtSale": 30.0,
                "total": 90.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 1,
                "priceAtSale": 90.0,
                "total": 90.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            }
        ]
    },
    {
        "id": "9ed265a4-e1d7-40d3-b8fc-cab6330ff5d2",
        "totalAmount": 315.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-16T14:07:02.524155Z",
        "items": [
            {
                "productId": "88bb8de3-34dc-487e-833c-e78872ca8a20",
                "quantity": 3,
                "priceAtSale": 50.0,
                "total": 150.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 3,
                "priceAtSale": 55.0,
                "total": 165.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            }
        ]
    },
    {
        "id": "8ed547a4-2b9c-40e6-b9cc-9a365cc29de0",
        "totalAmount": 866.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-15T15:33:35.524155Z",
        "items": [
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 2,
                "priceAtSale": 28.0,
                "total": 56.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "productId": "cca13dea-defa-47e2-a4ce-a0ae64487dc5",
                "quantity": 2,
                "priceAtSale": 135.0,
                "total": 270.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 3,
                "priceAtSale": 180.0,
                "total": 540.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            }
        ]
    },
    {
        "id": "bbb7a6f4-afbc-48b5-975c-f92c829454a3",
        "totalAmount": 280.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-15T15:01:33.524155Z",
        "items": [
            {
                "productId": "40b865e6-e061-4159-b046-9e609e5c15ef",
                "quantity": 2,
                "priceAtSale": 140.0,
                "total": 280.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            }
        ]
    },
    {
        "id": "28fd460e-63d9-485a-bf12-7640767ac86b",
        "totalAmount": 651.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-15T09:30:04.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 3,
                "priceAtSale": 180.0,
                "total": 540.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "productId": "eed2352f-8dd4-4126-a3b7-9a6cb0b23c7d",
                "quantity": 2,
                "priceAtSale": 28.0,
                "total": 56.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 1,
                "priceAtSale": 55.0,
                "total": 55.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            }
        ]
    },
    {
        "id": "5045c4d1-8282-4b2d-ab5c-165b86a987ec",
        "totalAmount": 360.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-15T08:14:54.524155Z",
        "items": [
            {
                "productId": "6384e8d3-ee29-4757-b86e-c495f6181c5d",
                "quantity": 2,
                "priceAtSale": 180.0,
                "total": 360.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            }
        ]
    },
    {
        "id": "77d95103-c57b-42d4-ba2d-791a5f5f2597",
        "totalAmount": 435.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-15T13:31:44.524155Z",
        "items": [
            {
                "productId": "45361af8-ea5f-41a5-8017-19cbe5904d9d",
                "quantity": 3,
                "priceAtSale": 90.0,
                "total": 270.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "productId": "8c151356-4776-4089-ac1c-fa7b4a538f31",
                "quantity": 3,
                "priceAtSale": 55.0,
                "total": 165.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            }
        ]
    }
] as Transaction[];
