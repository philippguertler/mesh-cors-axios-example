# Usage
Start mesh on `http://localhost:8080`
Add these CORS settings to your `mesh.yml`:

```yml
httpServer:
  port: 8080
  host: "0.0.0.0"
  corsAllowedOriginPattern: "http://localhost:8082"
  corsAllowCredentials: true
  enableCors: true
  ssl: false
  certPath: "config/cert.pem"
  keyPath: "config/key.pem"
```

1. `npm ci`
2. `npm start`
3. Browse to `http://localhost:8082`
4. Click login
5. You should see data of the admin user.