# Escape Character
as we know, when we write `{{ data }}`, blade will use `htmlspecialchar` by default in order to prevent mallicious script. we can disable this by instead writing `{!! data !!}`. this is called escape character

# Mass Assignment
we can assign a lot of data property at once by using this script
```php
Model_name::create([
	'property1' => value1,
	'property2' => value2,
	...
])
```

but, before we can do that, we should tell laravel that the property above is fillable by using `fillable` class property in our model.

example :
```php
class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'excerpt', 'body'];
}
```
