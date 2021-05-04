# Meals API

## About
It's an API about meals, where I used this on my app.

## Meals Category

### GET `http:localhost:5500/meals`
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
### GET `http://localhost:5500/meal/${id}`
It returns only one meals using the meals's id

### POST `http://localhost:5500/meals`
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

### GET `http://localhost:5500/meals/calories/${order}` 
It'll return the meals ordered by calories, order options: `asc` and `desc`

### GET `http://localhost:5500/meals/title/${meal_title}`
Here you'll get all the Meals with a similar title
```
//http://localhost:5500/meals/title/Lig
{
	"title": "Light Day Plan",
	"rated": 0,
	...
}
```  

### PUT `http://localhost:5500/meal/like/${meal_id}`
Give an like
```
{
  	"msg": "Liked <3"
}
```

### PUT `http://localhost:5500/meal/unlike/${meal_id}`
Give an unlike. For both like and unlike you'll need to build up a system to not allow you give unlike before there was a like
```
}
  	"msg": "Liked was removed"
{
```

## User Category

### POST `http://localhost:5500/register`
Enable you to create your account to access the api/app
```
// Input
{
 	"name": "test",
  	"email": "test@gmail.com",
  	"password": "test"
}

// Output
{
  	"email": "test@gmail.com",
  	"password": "$2b$10$PPpxxVHaGhimKf5OUvNhqOE2XuGLEmeXNrggLCeasCnExftqzv6Au",
  	"name": "test",
  	"photo": "undefined",
  	"id": "39dd30fd-73b4-4003-9bf3-43e3c64c75c4",
  	"created_at": "2021-05-04T17:31:44.960Z",
	"updated_at": "2021-05-04T17:31:44.960Z"
}
```

### POST `http://localhost:5500/login`
```
//Input
{
  	"email": "test@gmail.com",
  	"password": "test"
}

//Output
{
  	"msg": "Success. Logged!"
}
```

### GET `http://localhost:5500/check`
Check if the user is connected or not.
```
// User connected
{
  	"id": "xxxxxx",
  	"name": "test",
  	"email": "test@gmail.com",
 	"photo": "undefined"
}

// User not connected
{
	"msg": "The user wasn't found!"
}
```

### GET `http://localhost:5500/users`
It returns all users created
```
{
  "user": [
    {
      "id": "xxxxxx",
      "name": "test_x",
      "photo": "undefined",
      "email": "test",
      "password": "$2b$10$GYy/iMgncXI4bAgg6C2SG.gwp4HhSsXDJ6uPoIR2vzpbb5rGIWjZ.",
      "created_at": "2021-05-04T14:47:49.623Z",
      "updated_at": "2021-05-04T14:47:49.623Z"
    },
    {
      "id": "yyyyyy",
      "name": "test_y",
      "photo": "undefined",
      ...
    }  
    ...
  ] 
}
```

### PUT `http://localhost:5500/user/update/${user_id}`
It's will change the user's photo
```
// Body
{
	"photo": "photo.link"
}

// Output
{
	"msg": "Photo Changed!"
}
```
