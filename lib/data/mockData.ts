import { Product, Transaction } from "./types";

export const MOCK_PRODUCTS: Product[] = [
    {
        "id": "289d33c0-9964-4492-b968-4df32920ba56",
        "name": "India Gate Basmati Rice 1kg",
        "sellingPrice": 180.0,
        "costPrice": 150.0,
        "stockQuantity": 53,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
        "name": "Tata Sampann Toor Dal 1kg",
        "sellingPrice": 140.0,
        "costPrice": 115.0,
        "stockQuantity": 157,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
        "name": "Fortune Sunflower Oil 1L",
        "sellingPrice": 135.0,
        "costPrice": 120.0,
        "stockQuantity": 40,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "58668990-e30d-4465-b55b-da7a2055d36f",
        "name": "Amul Taaza Milk 500ml",
        "sellingPrice": 28.0,
        "costPrice": 25.0,
        "stockQuantity": 41,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
        "name": "Britannia Daily Bread 400g",
        "sellingPrice": 45.0,
        "costPrice": 35.0,
        "stockQuantity": 132,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
        "name": "Taj Mahal Tea 250g",
        "sellingPrice": 160.0,
        "costPrice": 135.0,
        "stockQuantity": 30,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "3f759745-87eb-4254-a6ad-df163b4f94d6",
        "name": "Madhur Pure Sugar 1kg",
        "sellingPrice": 55.0,
        "costPrice": 45.0,
        "stockQuantity": 35,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
        "name": "Tata Salt 1kg",
        "sellingPrice": 25.0,
        "costPrice": 20.0,
        "stockQuantity": 111,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "00097134-268c-4868-a7be-382fdf3af4f5",
        "name": "Parle-G Gold Biscuits 1kg",
        "sellingPrice": 90.0,
        "costPrice": 75.0,
        "stockQuantity": 45,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "19876df2-9987-46eb-8229-d8f25769afa6",
        "name": "Dettol Original Soap 125g",
        "sellingPrice": 50.0,
        "costPrice": 40.0,
        "stockQuantity": 39,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
        "name": "Maggi 2-Minute Noodles 140g",
        "sellingPrice": 30.0,
        "costPrice": 25.0,
        "stockQuantity": 71,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    },
    {
        "id": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
        "name": "Aashirvaad Atta 5kg",
        "sellingPrice": 240.0,
        "costPrice": 210.0,
        "stockQuantity": 100,
        "trackStock": true,
        "createdAt": "2026-02-21T01:32:36.510672Z",
        "updatedAt": "2026-02-21T01:32:36.510672Z"
    }
];

export const MOCK_TRANSACTIONS = [
    {
        "id": "3b26e4ef-bddc-4378-9b19-5367a9ed6177",
        "totalAmount": 950.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-21T15:19:46.510672Z",
        "items": [
            {
                "id": "1663fe44-bbc3-4ed9-9201-c1ee77e32232",
                "transactionId": "3b26e4ef-bddc-4378-9b19-5367a9ed6177",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
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
                "id": "5e5ddf5c-40c9-4176-b281-e9285e1969d0",
                "transactionId": "3b26e4ef-bddc-4378-9b19-5367a9ed6177",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "a00449d8-9c58-4ed8-b050-c878da180c45",
                "transactionId": "3b26e4ef-bddc-4378-9b19-5367a9ed6177",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "9c4fdad9-ff00-42a4-8eb9-60493b800e14",
                "transactionId": "3b26e4ef-bddc-4378-9b19-5367a9ed6177",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 2,
                "priceAtSale": 160.0,
                "total": 320.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            }
        ]
    },
    {
        "id": "3941e712-6e4e-4c28-bbe4-e11811e4cb57",
        "totalAmount": 470.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-21T20:31:57.510672Z",
        "items": [
            {
                "id": "7707b4a8-9b41-49e5-a307-f7729b608161",
                "transactionId": "3941e712-6e4e-4c28-bbe4-e11811e4cb57",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
                "quantity": 1,
                "priceAtSale": 140.0,
                "total": 140.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            },
            {
                "id": "8ce1fc76-0f84-4391-9f65-22038d2815e5",
                "transactionId": "3941e712-6e4e-4c28-bbe4-e11811e4cb57",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "a0e9f442-cde1-4244-ac05-e81321d24e6c",
                "transactionId": "3941e712-6e4e-4c28-bbe4-e11811e4cb57",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
        "id": "1634d22e-2ad5-4c69-847c-6c15f5ef8ca1",
        "totalAmount": 975.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T19:56:52.510672Z",
        "items": [
            {
                "id": "a59f10cc-a296-41f4-83e6-f0dff2b308f1",
                "transactionId": "1634d22e-2ad5-4c69-847c-6c15f5ef8ca1",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
                "quantity": 1,
                "priceAtSale": 140.0,
                "total": 140.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            },
            {
                "id": "8e0b04b5-7b6d-4e13-9dbb-031585e82f00",
                "transactionId": "1634d22e-2ad5-4c69-847c-6c15f5ef8ca1",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 1,
                "priceAtSale": 160.0,
                "total": 160.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "id": "94e84fed-5f01-4921-955a-8985768e575c",
                "transactionId": "1634d22e-2ad5-4c69-847c-6c15f5ef8ca1",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "4afc1c72-b7f7-416c-9dfd-2d06832dcc32",
                "transactionId": "1634d22e-2ad5-4c69-847c-6c15f5ef8ca1",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
        "id": "ae9bfb61-d147-4828-b1b1-dcdbc2314b36",
        "totalAmount": 650.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T08:41:11.510672Z",
        "items": [
            {
                "id": "ab831f78-e533-4f12-a2e6-cd5f13eba0f3",
                "transactionId": "ae9bfb61-d147-4828-b1b1-dcdbc2314b36",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
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
                "id": "36d4851a-5cdc-4f0b-9b90-cdc9f002d389",
                "transactionId": "ae9bfb61-d147-4828-b1b1-dcdbc2314b36",
                "productId": "3f759745-87eb-4254-a6ad-df163b4f94d6",
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
                "id": "26e3fce2-7531-4a00-8176-df519f06e536",
                "transactionId": "ae9bfb61-d147-4828-b1b1-dcdbc2314b36",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "42a306fd-cb88-436a-a33e-b5452019830f",
                "transactionId": "ae9bfb61-d147-4828-b1b1-dcdbc2314b36",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
        "id": "be145cf4-2689-49e3-8dfe-26e69b26c8ad",
        "totalAmount": 549.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T20:20:11.510672Z",
        "items": [
            {
                "id": "c29cc4b0-4424-4350-adca-b4636af51956",
                "transactionId": "be145cf4-2689-49e3-8dfe-26e69b26c8ad",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
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
                "id": "00e4fff0-83da-433f-9c28-9163ca20e0c3",
                "transactionId": "be145cf4-2689-49e3-8dfe-26e69b26c8ad",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "8bb89b44-e370-49a4-91b6-234419ee376b",
                "transactionId": "be145cf4-2689-49e3-8dfe-26e69b26c8ad",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
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
                "id": "62c63d31-c023-4267-bf6a-48d166f429a7",
                "transactionId": "be145cf4-2689-49e3-8dfe-26e69b26c8ad",
                "productId": "58668990-e30d-4465-b55b-da7a2055d36f",
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
        "id": "c5a8381a-3ee8-49ca-ae50-3e372a4ee037",
        "totalAmount": 410.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-20T12:41:11.510672Z",
        "items": [
            {
                "id": "85137aec-caf0-4a71-9136-ad4b669352b0",
                "transactionId": "c5a8381a-3ee8-49ca-ae50-3e372a4ee037",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
                "quantity": 2,
                "priceAtSale": 180.0,
                "total": 360.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            },
            {
                "id": "c975b43e-6608-4d30-975d-6789adb630a4",
                "transactionId": "c5a8381a-3ee8-49ca-ae50-3e372a4ee037",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
        "id": "3ccb0149-6fb9-4780-9a62-427968894e59",
        "totalAmount": 1215.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-20T14:42:34.510672Z",
        "items": [
            {
                "id": "24c1f2cb-9923-4471-9425-7add37c97b81",
                "transactionId": "3ccb0149-6fb9-4780-9a62-427968894e59",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
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
                "id": "5804b591-a70c-44c6-8b91-b19eb10fe36e",
                "transactionId": "3ccb0149-6fb9-4780-9a62-427968894e59",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
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
                "id": "45c901f6-4a81-4e33-853b-816045d89b94",
                "transactionId": "3ccb0149-6fb9-4780-9a62-427968894e59",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
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
                "id": "6ac87006-f40e-40e3-a5cd-d8393e066913",
                "transactionId": "3ccb0149-6fb9-4780-9a62-427968894e59",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
                "quantity": 1,
                "priceAtSale": 135.0,
                "total": 135.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            }
        ]
    },
    {
        "id": "f3147a68-402c-4701-a924-c070c9b91a85",
        "totalAmount": 640.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T12:50:27.510672Z",
        "items": [
            {
                "id": "02447f8a-1e2d-4352-9999-5c91986203c3",
                "transactionId": "f3147a68-402c-4701-a924-c070c9b91a85",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
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
                "id": "938f3294-9345-4e3f-ba03-518d39695f4c",
                "transactionId": "f3147a68-402c-4701-a924-c070c9b91a85",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
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
                "id": "86e4b03f-e0e2-41fb-83b3-3ddeac5c243d",
                "transactionId": "f3147a68-402c-4701-a924-c070c9b91a85",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "4742598d-6967-462f-887a-1418c616ac14",
                "transactionId": "f3147a68-402c-4701-a924-c070c9b91a85",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
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
        "id": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
        "totalAmount": 6180.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T12:27:29.510672Z",
        "items": [
            {
                "id": "fb85824a-8b14-432e-a632-459ab38391a9",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "3f759745-87eb-4254-a6ad-df163b4f94d6",
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
                "id": "c74e3e0e-df20-45b3-bace-b4a2588dc745",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 7,
                "priceAtSale": 160.0,
                "total": 1120.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "id": "f6bc247e-692a-4352-b1e5-ddb9fdc93388",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
                "quantity": 6,
                "priceAtSale": 45.0,
                "total": 270.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "id": "7b1d0972-1850-453a-bec8-dfb41001f11c",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
                "quantity": 4,
                "priceAtSale": 140.0,
                "total": 560.0,
                "product": {
                    "name": "Tata Sampann Toor Dal 1kg",
                    "costPrice": 115.0,
                    "sellingPrice": 140.0
                }
            },
            {
                "id": "e851027b-910b-4fd9-b408-499ddc7e9a05",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
                "quantity": 6,
                "priceAtSale": 240.0,
                "total": 1440.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "id": "86118bad-8451-4de9-9a61-df0fc2ed3107",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
                "id": "8a2b6f58-d73d-4e62-a967-22000cf5251e",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
                "quantity": 4,
                "priceAtSale": 90.0,
                "total": 360.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "id": "7926bc15-47c9-4701-9aab-b95316ec29cd",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
                "quantity": 7,
                "priceAtSale": 135.0,
                "total": 945.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "id": "020ce105-f85b-431b-aa88-34be5384dab7",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "58668990-e30d-4465-b55b-da7a2055d36f",
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
                "id": "c25725ea-6c54-4438-8f36-e70d47a01733",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
                "quantity": 8,
                "priceAtSale": 50.0,
                "total": 400.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "id": "18640e05-5879-459f-89b3-0ab8fd595e91",
                "transactionId": "efdfd555-54e8-4bab-94a3-addef4cf0b04",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
                "quantity": 8,
                "priceAtSale": 30.0,
                "total": 240.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            }
        ]
    },
    {
        "id": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
        "totalAmount": 3452.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T20:07:31.510672Z",
        "items": [
            {
                "id": "70d44599-8567-471a-8c31-ab82e752ea09",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
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
                "id": "7ac1a039-e676-45fe-bddc-1bab521ddf7b",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
                "quantity": 3,
                "priceAtSale": 25.0,
                "total": 75.0,
                "product": {
                    "name": "Tata Salt 1kg",
                    "costPrice": 20.0,
                    "sellingPrice": 25.0
                }
            },
            {
                "id": "141c71d8-b1c8-4bbb-85ca-8cb6144cf10a",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "58668990-e30d-4465-b55b-da7a2055d36f",
                "quantity": 4,
                "priceAtSale": 28.0,
                "total": 112.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "id": "0cf95ecc-438a-4bfa-9aa0-dab1eba4a268",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 4,
                "priceAtSale": 160.0,
                "total": 640.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "id": "faff48a5-ef04-46f8-a56b-37cb7d48b345",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "3f759745-87eb-4254-a6ad-df163b4f94d6",
                "quantity": 8,
                "priceAtSale": 55.0,
                "total": 440.0,
                "product": {
                    "name": "Madhur Pure Sugar 1kg",
                    "costPrice": 45.0,
                    "sellingPrice": 55.0
                }
            },
            {
                "id": "e604b2f0-ae17-4d21-b3f8-fccf8b6d23d9",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "b61c8158-5d0d-4c23-a77d-4bba9339d928",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
                "quantity": 7,
                "priceAtSale": 135.0,
                "total": 945.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            },
            {
                "id": "c5a26567-33bc-4e29-9956-0c8b87c3be72",
                "transactionId": "cfdff23f-c18d-4df8-899e-40f785d3bccd",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
                "quantity": 3,
                "priceAtSale": 90.0,
                "total": 270.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            }
        ]
    },
    {
        "id": "5e618a55-1dc5-4d18-9e70-f496556e6e85",
        "totalAmount": 830.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T19:57:10.510672Z",
        "items": [
            {
                "id": "448a82c2-00c0-487a-bcf0-ba15b31e0964",
                "transactionId": "5e618a55-1dc5-4d18-9e70-f496556e6e85",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "9f8e8f47-f6ba-4ce0-b47b-286324294b18",
                "transactionId": "5e618a55-1dc5-4d18-9e70-f496556e6e85",
                "productId": "3f759745-87eb-4254-a6ad-df163b4f94d6",
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
                "id": "b3894bfa-d7c0-4487-be0e-4729c1e25750",
                "transactionId": "5e618a55-1dc5-4d18-9e70-f496556e6e85",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "3d395191-4d16-46bc-88d7-8651dea69876",
                "transactionId": "5e618a55-1dc5-4d18-9e70-f496556e6e85",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
        "id": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
        "totalAmount": 5635.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-19T10:46:18.510672Z",
        "items": [
            {
                "id": "e1d97d48-7cfe-4aa4-923e-17fed0cee84d",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "58668990-e30d-4465-b55b-da7a2055d36f",
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
                "id": "9474936a-c6dd-470d-840d-451f421fa47b",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
                "quantity": 4,
                "priceAtSale": 240.0,
                "total": 960.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            },
            {
                "id": "c129e3af-3513-4c2f-b21f-77168efebe19",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
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
                "id": "1952d5ab-38b3-446e-bc9c-37a2eb3b8c96",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
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
                "id": "bf4a9411-6366-431c-91d9-f97e51965ece",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
                "quantity": 8,
                "priceAtSale": 45.0,
                "total": 360.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            },
            {
                "id": "2f17b1ff-dcfd-4e3c-bd8b-a1f2744c6417",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "7534ad87-b199-4eeb-8f41-3a1ea2de238a",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 5,
                "priceAtSale": 160.0,
                "total": 800.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            },
            {
                "id": "1bce944f-d912-47b6-a084-af973be1186c",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "3f759745-87eb-4254-a6ad-df163b4f94d6",
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
                "id": "42afbc32-6189-4abf-91dd-46da13ccb8f8",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
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
                "id": "e2041ceb-6720-494d-8573-4e0f8ae0758d",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
                "quantity": 4,
                "priceAtSale": 50.0,
                "total": 200.0,
                "product": {
                    "name": "Dettol Original Soap 125g",
                    "costPrice": 40.0,
                    "sellingPrice": 50.0
                }
            },
            {
                "id": "5390aebd-9c27-478d-b018-cf73d09b1493",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
                "quantity": 4,
                "priceAtSale": 30.0,
                "total": 120.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "id": "5eaed579-73d8-4624-8b2b-bb6841ea84e3",
                "transactionId": "df3c14c5-83f2-474f-9cec-a7eb513217c2",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
                "quantity": 5,
                "priceAtSale": 180.0,
                "total": 900.0,
                "product": {
                    "name": "India Gate Basmati Rice 1kg",
                    "costPrice": 150.0,
                    "sellingPrice": 180.0
                }
            }
        ]
    },
    {
        "id": "70dd672d-8bd0-4d38-bdec-21ce30a17453",
        "totalAmount": 540.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-18T09:50:52.510672Z",
        "items": [
            {
                "id": "01a990e4-89f7-420f-9bf1-63e8002237db",
                "transactionId": "70dd672d-8bd0-4d38-bdec-21ce30a17453",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "a813f970-c110-4c59-9be3-01f3713c334b",
                "transactionId": "70dd672d-8bd0-4d38-bdec-21ce30a17453",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
        "id": "5bcbc960-cfcc-4aa5-94e0-4057e86f82cd",
        "totalAmount": 685.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-18T15:41:02.510672Z",
        "items": [
            {
                "id": "98c32725-d084-4fd8-9ee4-9e9360b032f1",
                "transactionId": "5bcbc960-cfcc-4aa5-94e0-4057e86f82cd",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "782624f1-1937-4cdb-8931-86bbf6a8a5d7",
                "transactionId": "5bcbc960-cfcc-4aa5-94e0-4057e86f82cd",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "17f032cc-796d-4b82-ae56-2fe3a16871b6",
                "transactionId": "5bcbc960-cfcc-4aa5-94e0-4057e86f82cd",
                "productId": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
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
                "id": "c70d2c7f-b605-43ff-94a9-050030551d4d",
                "transactionId": "5bcbc960-cfcc-4aa5-94e0-4057e86f82cd",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
                "quantity": 1,
                "priceAtSale": 240.0,
                "total": 240.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            }
        ]
    },
    {
        "id": "4fa813d5-b7f0-4607-9667-e5bf47c68414",
        "totalAmount": 804.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T20:22:19.510672Z",
        "items": [
            {
                "id": "a86ae462-46e0-4a4e-b050-34caa0e6a561",
                "transactionId": "4fa813d5-b7f0-4607-9667-e5bf47c68414",
                "productId": "58668990-e30d-4465-b55b-da7a2055d36f",
                "quantity": 3,
                "priceAtSale": 28.0,
                "total": 84.0,
                "product": {
                    "name": "Amul Taaza Milk 500ml",
                    "costPrice": 25.0,
                    "sellingPrice": 28.0
                }
            },
            {
                "id": "74cf1717-1a1f-4bf5-9ece-6e1f2743f906",
                "transactionId": "4fa813d5-b7f0-4607-9667-e5bf47c68414",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
                "quantity": 3,
                "priceAtSale": 240.0,
                "total": 720.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            }
        ]
    },
    {
        "id": "d41dc458-e6c1-4813-9467-9c695f65ecb1",
        "totalAmount": 50.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-17T11:28:51.510672Z",
        "items": [
            {
                "id": "127082df-488f-4abb-a2d2-129ce49d7266",
                "transactionId": "d41dc458-e6c1-4813-9467-9c695f65ecb1",
                "productId": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
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
        "id": "f9ecee73-95e9-4efb-9822-3923c7bf38bb",
        "totalAmount": 320.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-17T08:52:00.510672Z",
        "items": [
            {
                "id": "62df7d1d-f58e-4c62-b621-2a946c19af06",
                "transactionId": "f9ecee73-95e9-4efb-9822-3923c7bf38bb",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 2,
                "priceAtSale": 160.0,
                "total": 320.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            }
        ]
    },
    {
        "id": "73eed0d8-5575-4034-a17e-dcc67ee0e2c6",
        "totalAmount": 835.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-17T16:41:21.510672Z",
        "items": [
            {
                "id": "546a5d6e-a614-479b-b8a2-6740ee9104f7",
                "transactionId": "73eed0d8-5575-4034-a17e-dcc67ee0e2c6",
                "productId": "6e0fd907-bb8f-47bb-b467-742aa7f16ea0",
                "quantity": 2,
                "priceAtSale": 30.0,
                "total": 60.0,
                "product": {
                    "name": "Maggi 2-Minute Noodles 140g",
                    "costPrice": 25.0,
                    "sellingPrice": 30.0
                }
            },
            {
                "id": "6d0cfe48-c522-4686-b7e3-adde9252f967",
                "transactionId": "73eed0d8-5575-4034-a17e-dcc67ee0e2c6",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
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
                "id": "6aea080e-dd19-4173-ae1f-333c8c9f5842",
                "transactionId": "73eed0d8-5575-4034-a17e-dcc67ee0e2c6",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "e2ce23e2-37e7-4fe1-a402-89fefb7d2735",
                "transactionId": "73eed0d8-5575-4034-a17e-dcc67ee0e2c6",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
        "id": "5f7ef6d6-a159-4f22-b151-6d17f0ceba9f",
        "totalAmount": 830.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-16T09:48:46.510672Z",
        "items": [
            {
                "id": "106a7ad9-c500-40f2-b18e-ebbed3d58981",
                "transactionId": "5f7ef6d6-a159-4f22-b151-6d17f0ceba9f",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "dfd35476-1c65-4c23-8805-ecaea9c2767e",
                "transactionId": "5f7ef6d6-a159-4f22-b151-6d17f0ceba9f",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "7d2f8c9a-cf43-4b33-b434-b338b2c5b6cb",
                "transactionId": "5f7ef6d6-a159-4f22-b151-6d17f0ceba9f",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
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
                "id": "69701a98-9c1d-4bd4-9e7a-863e7dce14c3",
                "transactionId": "5f7ef6d6-a159-4f22-b151-6d17f0ceba9f",
                "productId": "8392e213-9f5a-4dc9-aef0-fd36cbd97388",
                "quantity": 2,
                "priceAtSale": 160.0,
                "total": 320.0,
                "product": {
                    "name": "Taj Mahal Tea 250g",
                    "costPrice": 135.0,
                    "sellingPrice": 160.0
                }
            }
        ]
    },
    {
        "id": "ca8f985e-5253-43bd-8841-f82368158231",
        "totalAmount": 860.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-16T13:45:31.510672Z",
        "items": [
            {
                "id": "59d07e13-9a5c-4ddd-8cd7-84fcc963fed4",
                "transactionId": "ca8f985e-5253-43bd-8841-f82368158231",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "7d53d936-3e09-455d-b688-51408c8be838",
                "transactionId": "ca8f985e-5253-43bd-8841-f82368158231",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "f786d671-47f8-4825-9755-13d5fbac7a0c",
                "transactionId": "ca8f985e-5253-43bd-8841-f82368158231",
                "productId": "987b8ee8-51b4-4032-93d9-0a8579e914fe",
                "quantity": 3,
                "priceAtSale": 240.0,
                "total": 720.0,
                "product": {
                    "name": "Aashirvaad Atta 5kg",
                    "costPrice": 210.0,
                    "sellingPrice": 240.0
                }
            }
        ]
    },
    {
        "id": "d2291027-e298-429a-b02f-4697d132b705",
        "totalAmount": 955.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-16T16:02:36.510672Z",
        "items": [
            {
                "id": "77f4500b-ee82-4907-a4ea-ae491ade8828",
                "transactionId": "d2291027-e298-429a-b02f-4697d132b705",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "b4e92cdd-2536-4a66-bfae-3545a20d15df",
                "transactionId": "d2291027-e298-429a-b02f-4697d132b705",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "6bf01f58-3cf8-46ff-8ab0-0a838fd2ed57",
                "transactionId": "d2291027-e298-429a-b02f-4697d132b705",
                "productId": "19876df2-9987-46eb-8229-d8f25769afa6",
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
                "id": "30a0095c-d49d-490f-8dfe-c44c9faf7d89",
                "transactionId": "d2291027-e298-429a-b02f-4697d132b705",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
        "id": "d9f36d51-577f-4f33-978d-6fe2d5774bfe",
        "totalAmount": 135.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-16T12:05:23.510672Z",
        "items": [
            {
                "id": "826932fb-21e7-4fb6-9f76-fbfb3effc6d3",
                "transactionId": "d9f36d51-577f-4f33-978d-6fe2d5774bfe",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
                "quantity": 1,
                "priceAtSale": 135.0,
                "total": 135.0,
                "product": {
                    "name": "Fortune Sunflower Oil 1L",
                    "costPrice": 120.0,
                    "sellingPrice": 135.0
                }
            }
        ]
    },
    {
        "id": "a3a2a6d8-e944-45ce-a3a9-42b4d1a45aac",
        "totalAmount": 785.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-15T16:17:48.510672Z",
        "items": [
            {
                "id": "7f0b1be6-7a32-45a3-bbb5-afb06c1af7d1",
                "transactionId": "a3a2a6d8-e944-45ce-a3a9-42b4d1a45aac",
                "productId": "00097134-268c-4868-a7be-382fdf3af4f5",
                "quantity": 2,
                "priceAtSale": 90.0,
                "total": 180.0,
                "product": {
                    "name": "Parle-G Gold Biscuits 1kg",
                    "costPrice": 75.0,
                    "sellingPrice": 90.0
                }
            },
            {
                "id": "8fcc6157-b156-4719-bb50-cf91799d1a5c",
                "transactionId": "a3a2a6d8-e944-45ce-a3a9-42b4d1a45aac",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
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
                "id": "6d564c0a-4351-49c6-a0db-9623584970c9",
                "transactionId": "a3a2a6d8-e944-45ce-a3a9-42b4d1a45aac",
                "productId": "646023df-d3f7-4d74-a7ac-32f2655cda6e",
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
                "id": "92b47e21-a795-4863-aee2-cf7ada9dd258",
                "transactionId": "a3a2a6d8-e944-45ce-a3a9-42b4d1a45aac",
                "productId": "e8e6d6e2-efd4-4a02-80f5-9558d83c1e0a",
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
        "id": "b8557f42-6ff7-4a74-9a8f-49f842af3357",
        "totalAmount": 315.0,
        "paymentMethod": "UPI",
        "createdAt": "2026-02-15T12:48:49.510672Z",
        "items": [
            {
                "id": "d36f3c47-4a99-4c44-9cda-abdb2f69b1a9",
                "transactionId": "b8557f42-6ff7-4a74-9a8f-49f842af3357",
                "productId": "289d33c0-9964-4492-b968-4df32920ba56",
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
                "id": "e5bff5d8-7692-47a8-8982-bace8f4f1475",
                "transactionId": "b8557f42-6ff7-4a74-9a8f-49f842af3357",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
                "quantity": 3,
                "priceAtSale": 45.0,
                "total": 135.0,
                "product": {
                    "name": "Britannia Daily Bread 400g",
                    "costPrice": 35.0,
                    "sellingPrice": 45.0
                }
            }
        ]
    },
    {
        "id": "8179acf0-fc0a-41bc-be30-8f8522c1d31c",
        "totalAmount": 325.0,
        "paymentMethod": "CASH",
        "createdAt": "2026-02-15T20:11:51.510672Z",
        "items": [
            {
                "id": "228f162d-2575-4c57-a601-c23c88d82eff",
                "transactionId": "8179acf0-fc0a-41bc-be30-8f8522c1d31c",
                "productId": "d674c4f0-c67a-47d0-ac54-d4bd3f570e3b",
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
                "id": "6c173415-61b1-44e7-a21c-b70606968b04",
                "transactionId": "8179acf0-fc0a-41bc-be30-8f8522c1d31c",
                "productId": "6077227c-6c7f-4e7e-8b2a-1120ae4bea42",
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
    }
] as Transaction[];
