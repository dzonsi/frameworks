import {
	trigger,
	state,
	style,
	animate,
	transition,
	group,
	keyframes,
	query,
	sequence,
	stagger,
	animation,
	useAnimation,
	animateChild
} from '@angular/animations';

export const transAnimation = animation([
	style({
		left: '{{ left }}',
		opactity: '{{ opacity }}',
	}),
	animate('{{ time }}')
]);
