# meichuhackathon-backend
A backend service for meichuhackathon

# Intro
This is a user management system for the service, you can 

1. Find user by it's RFID -> `GET /api/v1/user/rfid/${rfid}`
2. Find user by it's ID -> `GET /api/v1/user/uid/${uid}`
3. Find multiple users by it's department ID -> `GET /api/v1/department/did/${did}`
4. Find all departments -> `GET /api/v1/department`
5. Check health -> `GET /api/v1/health/async`, `GET /api/v1/health/sync`

# Test

```shell
docker compose up test
```

# Dev

```shell
docker compose up app -d
```