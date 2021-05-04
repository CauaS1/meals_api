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
    "updated_at": "2021-04-05T16:39:07.509Z",
    "users": {
        "id": "uuid_format",
  	"name": "CauaS1",
  	"email": "test@gmail.com",
  	"photo": "https://github.com/cauas1.png"
    }
  },
  {
    "id": "8a94449d-0b4a-4732-89b4-641fad811207",
    "title": "Gain Weight Plan",
    ...
  },
  ...
]
  ```
  
## GET `http://localhost:5500/meals/title/${title_of_the_meal}`
Here you'll get all the Meals with a similar title
```
//http://localhost:5500/meals/title/Lig
{
	"title": "Light Day Plan",
	"rated": 0,
	...
}
```  
  
## POST `http://localhost:5500/meals`
You'll create your onw meal plan. your `body` must haves these properties. The user properties in my case I just got the connected user and put the values there
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
	"dinner_time": "07:00:00",
	"users": {
	    "id": "uuid_format",
  	    "name": "CauaS1",
 	    "email": "test@gmail.com",
  	    "photo": "https://github.com/cauas1.png"
	}
}

```

## GET `http://localhost:5500/meals/calories/${order}` 
It'll return the meals ordered by calories, order options: `asc` and `desc`


