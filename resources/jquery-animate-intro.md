## Cara Menambahkan JQuery ke Web
untuk menggunakan JQuery, terdapat 2 cara, yaitu dengan installasi langsung dan dengan menggunakan layanan CDN. berikut adalah script yang diperlukan untuk memasang JQuery menggunakan layanan CDN :

```html
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
```

## HTML Selector
dengan JQuery, kita bisa memilih objek dengan selector selayaknya menggunakan CSS. caranya adalah dengan menggunakan sintaks berikut :
```js
$(selector-string);
```
sebagai contoh, jika kita ingin memilih objek dengan `class = "teks"` maka :
```js
$(".teks");
```

## Menambahkan Kelas
tambahkan kelas ke selector terpilih menggunakan method `addClass()`. sebagai contoh, misal kita ingin menambahkan class `pistol` ke setiap elemen `div` yang ada, maka :
```js
$("div").addClass("pistol");
```

