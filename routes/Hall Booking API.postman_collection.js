{
	"info" = {
		"_postman_id": "30aa2089-7c71-418d-b166-8d864e2ba385",
		"name": "Hall Booking API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "35282550"
	},
	"item" = [
		{
			"name": "Create Room",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"numberOfSeats\": 30,\r\n    \"amenities\": [\"TV\", \"Conference Phone\", \"Wi-Fi\"],\r\n    \"pricePerHour\": 75\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://guvi-nodejs-day-2-task.onrender.com/rooms",
					"protocol": "https",
					"host": [
						"guvi-nodejs-day-2-task",
						"onRender",
						"com"
					],
					"path": [
						"rooms"
					]
				}
			},
			"response": []
		},
		{
			"name": "Book a Room",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"customerName\": \"Bob Johnson\",\r\n    \"date\": \"2024-06-01\",\r\n    \"startTime\": \"13:00\",\r\n    \"endTime\": \"15:00\",\r\n    \"roomId\": 1\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://guvi-nodejs-day-2-task.onrender.com/bookings",
					"protocol": "https",
					"host": [
						"guvi-nodejs-day-2-task",
						"onRender",
						"com"
					],
					"path": [
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "List All Rooms with Booked Data",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://guvi-nodejs-day-2-task.onrender.com/rooms",
					"protocol": "https",
					"host": [
						"guvi-nodejs-day-2-task",
						"onRender",
						"com"
					],
					"path": [
						"rooms"
					]
				}
			},
			"response": []
		},
		{
			"name": "List All Customers with Booked Data",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://guvi-nodejs-day-2-task.onrender.com/customers",
					"protocol": "https",
					"host": [
						"guvi-nodejs-day-2-task",
						"onRender",
						"com"
					],
					"path": [
						"customers"
					]
				}
			},
			"response": []
		},
		{
			"name": "List How Many Times a Customer Has Booked the Room",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://guvi-nodejs-day-2-task.onrender.com/customer/Bob%20Johnson",
					"protocol": "https",
					"host": [
						"guvi-nodejs-day-2-task",
						"onRender",
						"com"
					],
					"path": [
						"customer",
						"Bob%20Johnson"
					]
				}
			},
			"response": []
		}
	]
}