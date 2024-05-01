## Menghapus Kelas
jika kita menggunakan `addClass()` untuk menambahkan kelas, maka kita dapat menggunakan `removeClass()` untuk menghapus kelas dari suatu objek. contoh :
```javascript
$("div").removeClass("pistol")
```

## Mengganti Styling pada CSS
gunakan method `css()` pada selector untuk mengatur styling css untuk objek yang telah dipilih dengan argumen untuk method ini yaitu properti css yang ingin diatur, kemudian diikuti dengan *value* dari properti tersebut. sebagai contoh, jika kita ingin mengganti warna dari tag paragraf (`<p>`) menjadi merah, maka :
```javascript
$("p").css("color", "red");
```
## Mengatur Properti HTML
jquery juga dapat digunakan untuk mengatur properti2 lain pada html, seperti properti `disabled`, `value`, dan sebagainya. untuk hal ini, diperlukan method `prop()`. contoh :
```js
$("button").prop("disabled", true);
```
kode di atas akan mengakibatkan properti `disabled` pada elemen `<button>` menjadi `true`, dengan kata lain tombol tersebut menjadi *disabled*.

## Mengganti/Mengisi Konten HTML
gunakan method `html()` untuk mengganti atau mengisi konten pada sebuah objek dengan tag html ataupun teks. contoh :
```javascript
$("h3").html("<em>jQuery Playground</em>");
```
pada contoh di atas, isi dari tag `h3` diganti menjadi `<em>jQuery Playground</em>` yang akan dirender menjadi teks `Jquery Playground` yang sudah di-emphasize.

method yang serupa dengan ini yaitu method `text()`. perbedaan method ini dengan `html()` adalah method `text()` tidak akan merender teks yang diinputkan menjadi tag html, dan akan tetap menjadi teks biasa. jadi, 
```js
$("h3").teks("<em>jQuery Playground</em>");
```
kode di atas hanya akan menampilkan teks `<em>jQuery Playground</em>` tanpa dirender menjadi tag html.
