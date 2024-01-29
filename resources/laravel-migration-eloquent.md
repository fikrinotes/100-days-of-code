# Migration
migration - as the name it suggest - is a feature to migrate database of an application. this feature is available in laravel. it also make the interaction with database become easy because we interact with database, import and export using php directly.

we can create migration (creating database and a migration for it) by using this command :
```cmd
php artisan make:migration database_table_name
```

to migrate database, use :
```cmd
php artisan migrate
```

another command :
##### rollback
delete all table in database 
```cmd
php artisan migrate:rollback
```

##### refresh
delete all table in database, and then migrate the new table
```cmd
php artisan migrate:refresh
```

---
# Eloquent
*source :* https://laravel.com/docs/10.x/eloquent#main-content

eloquent is a object relational mapper (ORM) provided by laravel in order to mapping Models to data table. so, it's related to [[Models and Controller#Models|Models]]. by using eloquent in model, we can interact with database by using model
