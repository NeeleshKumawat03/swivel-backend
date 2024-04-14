view readme file in the code form for better understanding


1. download code or clone
2. install express 'npm i express'
3. run at postman or any other testing tools

some API request and responses ---

1. register/signup API 
API -> BASE_URL + '/signup'
request: {
    "name": "Han",
    "email": "Han@gamil.com",
    "password": "123456"
}


response: {
    "success": true,
    "message": "User is registered",
    "user": {
        "name": "Han",
        "email": "Han@gamil.com",
        "password": "$2b$10$7sF05mmz2CyIe4OtlxfAju0xUw5HUwBZXuF3o3tAxwpSDhEwuAu5S",
        "additionalDetails": "661b8dc29e05d135e51e6d0d",
        "_id": "661b8dc29e05d135e51e6d0f",
        "__v": 0
    }
}



2. login API
API -> BASE_URL + '/signup'
request: {
    "name": "Han",
    "email": "Han@gamil.com",
    "password": "123456"
}


response: {
    "success": "2024-04-17T08:16:09.841Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkhhbkBnYW1pbC5jb20iLCJpZCI6IjY2MWI4ZGMyOWUwNWQxMzVlNTFlNmQwZiIsImlhdCI6MTcxMzA4MjU2OSwiZXhwIjoxNzEzMDg5NzY5fQ.wAnoswEL08ELppgop7uFJZjUSWlJ-OvTk7SG9q-81Mg",
    "user": {
        "_id": "661b8dc29e05d135e51e6d0f",
        "name": "Han",
        "email": "Han@gamil.com",
        "additionalDetails": {
            "_id": "661b8dc29e05d135e51e6d0d",
            "gender": null,
            "dateOfBirth": null,
            "about": null,
            "contactNumber": null,
            "__v": 0
        },
        "__v": 0
    },
    "message": "Logged in successfully"
}



3. updateprofile API
API -> BASE_URL + '/updateprofile'
request: {
    "gender": "Male",
    "dateOfBirth": "12-12-12",
    "about": "May name is Han",
    "contactNumber": 1234506789
}

response: {
    "success": true,
    "message": "Profile Updated Successfully",
    "profileDetails": {
        "_id": "661b8dc29e05d135e51e6d0d",
        "gender": "Male",
        "dateOfBirth": "12-12-12",
        "about": "May name is Han",
        "contactNumber": 1234506789,
        "__v": 0
    }
}


4. diarycreate API
API -> BASE_URL + '/diarycreate'
request: {
    "title": "Hero",
    "description": "Hero Materials",
    "date": "12-12-12",
    "location": "Csam pride"
}

response: {
    "success": true,
    "message": "Diary Entry Created",
    "diaryEntry": {
        "user": "661b8dc29e05d135e51e6d0f",
        "title": "Hero",
        "description": "Hero Materials",
        "date": "2012-12-11T18:30:00.000Z",
        "location": "Csam pride",
        "_id": "661b92c9a5c4bafa6a4af840",
        "__v": 0
    }
}

5.get diary API
API -> BASE_URL + '/diary'
request: none

response : {
    "success": true,
    "message": "All diary fetched",
    "diaryDetails": [
        {
            "_id": "661b92c9a5c4bafa6a4af840",
            "user": "661b8dc29e05d135e51e6d0f",
            "title": "Hero",
            "description": "Hero Materials",
            "date": "2012-12-11T18:30:00.000Z",
            "location": "Csam pride",
            "__v": 0
        }
    ]
}











