# Keyframes

## The Basics
The `@keyframes` control the state of an element at a specific point of time in animation frame. It control the flow of the animation. 

use this rule to create a new keyframe in CSS :

```css
@keyframes keyframe_name {

}
```

inside that curly braces, we can control the state of an element at a specific point of time in animation frame. let say that when the animation has been running 25%, we want to make the element `.box` has been rotated 90degrees. to do this, we can write :

```css
@keyframes rotation_animation {
	0% {
		transform: rotate(0deg);
	}
	25% {
		transform: rotate(90deg);
	}
}
```

we can add animation timestamp as much as we want. for example, `10%`, `30%`, etc.

to apply this animation keyframe to the `.box` element, use the `animation-name` and the name of your keyframes as the value. to determine how long the animation occurs, use `animation-duration` property.

```css
.box {
animation-name: rotation_animation;
animation-duration: 10s; 
}
```
## Iteration Count
the `animation-iteration-count` property will determine how much your animation will be repeated. you can set it to the specific number, or even infinity (`infinite`).
## Timing Function
the `animation-timing-function` property will determine the progress of animation over time. it controls the rate of animation occurs. if we want to make our animation run at the same rate (speed) from start to finish, we can set the `animation-timing-function` to `linear`.
- another timing function : `ease-in-out`


## Read More
- https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
- https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform
