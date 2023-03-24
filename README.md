# Todo Application

![image](https://user-images.githubusercontent.com/76135381/227446865-0e7092e6-36a2-4efc-8de5-f8b72f091790.png)

## Run app
```
    git clone https://github.com/harun-guter/todo-app.git
    cd todo-app
    docker-compose up
```


| Frontend | API |
| :-------- | :------- |
| `http://localhost:3000`      | `http://localhost:8080` | 

---

## API Reference

#### Get all todos
```
  GET /api/todo
```

#### Get single todo
```
  GET /api/todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Add todo
```
  POST /api/todo/

  {
    "content": "string"
  }
```

#### Update todo
```
  PUT /api/todo/:id

  {
    "content": "string"
  }
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Delete todo
```
  DELETE /api/todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

---
## Tech Stack

**Frontend:** React, Semantic UI
<br>
**API:** Node, Express, MongoDB
