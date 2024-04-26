 sistem grid pada bootstrap terdiri dari 12 kolom grid yang dapat digunakan secara customize.  untuk memanfaatkan fitur sistem grid ini, diperlukan div parent dengan atribute `class="row"` dan child berupa sebuah div yang memiliki class dengan format sebagai berikut :
```css
col-{breakpoint (tidak harus ada)}-{ukuran/space}
```

jadi secara keseluruhan, format umum untuk menggunakan grid system pada bootsrap yaitu :
```html
<div class="row">
	<div class="col-3">
	<div class="col-xs-auto">
	<div class="col">
	<div class="..."></div>
</div>
```
