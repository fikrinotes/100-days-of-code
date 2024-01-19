# PHP Classes
we create class in PHP using the `class` keyword. it's just a convention to use a capital letter for the first letter in the class name.

```php
class Classname {
	
}
```

if we want to declare classes properties, just remember to write the *visibility* modifier. for example :

```php
class Buku {
	public $judul; 
}
```

the `public` keyword is used to inform that  `$judul` is a property of `Buku` class that is publicly visible. that means, `$judul` can be access out of the `Buku` class. this feature is also available in Java and known as *Access Modifier*. 

---
# Using Laravel
*Sources :* [Laravel Official Website](https://laravel.com/)

step :
- install laravel
- install composer
(*for this step, just follow the step in youtube. recomendation : Sandhika Galih*)
- running php and laravel by using `php artisan serve`

by using Laravel, we can implement MVC (Model, View, Controller) concept easily. here is the location of each file :
- Model : app/Models
- View : resources/views
- Controller : app/Http/Controllers

Next, `public` folder. this folder store all of static files such as image assets, css file, javascript file, etc.

**Managing Routes** - we can register, add, and manage all routes of our website in `routes/web.php`. 

### Routing 
basic syntax for routing in laravel :

```php
// get request
Route::get(location, function_to_execute);
```

example :

```php
Route::get('/', function () {
    return view("home", [
        "title" => "Home"
    ]);
});
```

at the example above, when we request for `/` location - or root location - our server will execute function that return the view of  "home" page, with data of `title` sent to that page.

### Blade Templating Engine
#### Displaying Data
by using blade templating engine, we can simply use `{{ }}` notation to display data that has been send to the page. from the example before, we know that we sent `title` to `home` page. so, in `home` page, we can display it by typing `<?php echo "$title" ?>`. but, since we are using Blade templating engine, we can use shorter syntax, that is `{{ $title }}`. 

#### Layouting (Template and Component)
first, make a folder to store the template and component. let's name this folder as `layouts`. this folder is located in `resources/view`. then, we can create template just like creating ordinary php blade file, and making a space to filled by other page by using `@yield(section)` directives. for example, `@yield('container')`

next, if we want to implement template that we've create to other page, we can create section requested by the template. based on the example before, that section in `container`. we can create section by using `@section()` directive. 
```php
@extends('layouts-location')

@section('container')
// content of section that will injected to the template
@endsection
```
