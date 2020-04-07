# Visitor Access #

### Start server and db
* set env variables to .env file
* run `env $(cat .env) docker-compose up -d`
* now server is available on {baseUrl}:3001

### API
1) **GET /login (auth user)**

response: `status 200`

2) **GET /rules (get all rules)**
	
response example:
```json
            {
				"rules": [{
					"id": 1,
					"index": 0,
					"title": "rule 1",
					"text": "text text test"
				},
  				{
					"id": 2,
					"index": 1,
					"title": "rule 2",
					"text": "text text"
				}]
			}
```

3) **GET /survey (get all survey questions)**

response example:
```json
            {
				"questions": [{
					"id": 1,
					"description": "survey question 1",
					"index": 0,
					"positiveAnswer": 0,
					"title": "survey question 1?"
				},
				{
					"id": 2,
					"description": "survey question 2",
					"index": 1,
					"positiveAnswer": 0,
					"title": "survey question 2?"
				}]
			}
```

4) **POST /patien/search (get all patients according to required params)**

request body example:
```json
            {
				"name": "Name",
				"floor": 1
			}
```

response example:
```json
            {
				"content": [{
					"id": 1,
					"available": true,
					"bookedPerson": "John Doe",
					"floor": 1,
					"name": "John Smith",
					"time": "2:12 PM"
					},
				  	{
					"id": 2,
					"available": true,
					"floor": 2,
					"name": "Nick Smith"
					}]
			}
```

5) **PUT /patien/book/:id (book patient)**

response example:
```json
            {
				"booking": {
					"patientId": 1,
					"userId": 1,
					"updatedAt": "2020-04-04T14:33:00.027Z",
					"createdAt": "2020-04-04T14:33:00.027Z"
				}
			}
```

6) **PUT /patien/unbook/:id (unbook patient)**

response example:
```json
            {
				"booking": {
					"id": 1,
					"patientId": 1,
					"userId": 1,
					"updatedAt": "2020-04-04T14:33:00.027Z",
					"createdAt": "2020-04-04T14:33:00.027Z"
				}
			}
```
