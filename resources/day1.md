# Day 1 
## child selector

syntax :

```css
selector1 > selector2 {

}
```


child selector will select `selector2` which is a direct child of `selector1`


## descendant selector

syntax :

```css
selector1 selector2 {

}
```

descendant selector will select `selector2` which have `selector1` as its ancestor (translate : pendahulu/leluhur). in other words, this will select selector2 which is an indirect child of `selector1`. 

# CSS Flexbox
sources : [CSS Ttrics - flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Flexbox direction
flexbox direction is the direction of main axis. if the value of property `flex-direction` is row, then the main axis is horizontal axis. then, the cross axis is vertical axis (main axis and cross axis is always perpendicular). 

## align items
determine the posisition of item along the cross axis

## justify content 
determine the position of item along the main axis

## gap
make a gap between each item of flexbox. sources : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)


# Gallery
## Object Fit
fit the image/objects to a specific size without stretch. use :

```css
item_selector {
	object-fit : cover;
}
```


## `::after` pseudo elements
make a last child of a parent/container.
example :

```css
.gallery::after {
	content: "";
	width: 350px;
}
```
