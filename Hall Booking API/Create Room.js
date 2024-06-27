{
	"info" = {
		"_postman_id": "30aa2089-7c71-418d-b166-8d864e2ba385",
		"name": "Hall Booking API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "35282550"
	}
}
	

{
 "name" = "Create Room",
 "request" = {
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
 "response" = []
}