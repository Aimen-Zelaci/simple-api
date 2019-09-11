## ENV Config

| Configuration Option          | Default Value               | Description   
| ------------------------------|-----------------------------| --------------|
| DEBUG                         | API                         | debugger
| MYSQL_HOST                    | localhost                   | MySQL host URL
| MYSQL_USER                    | root                        | MySQL username
| MYSQL_PASSWORD                | password                    | MySQL password
| MYSQL_DATABASE                | sys                         | MySQL database
| LOGZIO_ACCESS_TOKEN           | null                        | Access token to logz.io.
| LOGZIO_LOG_TYPE               | API                         | Type of logz.io logging.
| PORT                          | 3000                        | Server port.

## API Methods

# Create user
```
{
    personID:'New user id (has to be an int)',
    LastName:'New user last name (has to be varchar)',
    FirstName:'New user first name (has to be varchar)',
    Address:'New user address (has to be varchar)',
    City:'New user city (has to be varchar)'
 }
```

# Delete User
```
    id: req.params
```
# Patch user
```
    id: req.params
```
