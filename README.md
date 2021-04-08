# Meals API

## About
It's an API about meals, where I used this in my app.

## GET `http:localhost:5500/meals`
Return all meals created:
```
[
  {
    "id": "b1187ba8-7c6a-4166-a311-af0d51cc13e7",
    "title": "Lose Weight Plan",
    "rated": 0,
    "breakfast": "Coffee and sandwich",
    "lunch": "Rice, beans, steak and juice",
    "snack": "Chips or crackers",
    "dinner": "Pizza and fries and a orange juice",
    "total_calories": 1400,
    "breakfast_time": "07:00:00",
    "lunch_time": "12:00:00",
    "snack_time": "15:00:00",
    "dinner_time": "07:00:00",
    "created_at": "2021-04-05T16:39:07.509Z",
    "updated_at": "2021-04-05T16:39:07.509Z"
  },
  {
    "id": "8a94449d-0b4a-4732-89b4-641fad811207",
    "title": "Gain Weight Plan",
    "rated": 0,
    "breakfast": "Coffee and sandwich",
    "lunch": "Rice, beans, steak and juice",
    "snack": "Chips or crackers",
    "dinner": "Pizza and fries and a orange juice",
    "total_calories": 1565,
    "breakfast_time": "07:00:00",
    "lunch_time": "12:00:00",
    "snack_time": "15:00:00",
    "dinner_time": "07:00:00",
    "created_at": "2021-04-05T16:39:33.974Z",
    "updated_at": "2021-04-05T16:39:33.974Z"
  },
  ...
]
  ```
  
## POST `http://localhost:5500/meals`
You'll create your onw meal plan. your `body` must haves these properties
```
{
	"title": "Light Day Plan",
	"rated": 0,
	"breakfast": "Coffee and sandwich",
	"lunch": "Rice, beans, steak and juice",
	"snack": "Chips or crackers",
	"dinner": "Rice beans, steak and an orange juice",
	"total_calories" : 1180,
	
	"breakfast_time": "07:00:00",
	"lunch_time": "12:00:00",
	"snack_time": "15:00:00",
	"dinner_time": "07:00:00"
}

```
