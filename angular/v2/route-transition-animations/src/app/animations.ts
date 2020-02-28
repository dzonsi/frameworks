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


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> FirstPage', [
      style({ position: 'relative' }),
      // set default style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '200px', opacity: 0})
      ]),
      // call child animations before leave
      query(':leave', animateChild()),
      // animate the new page in
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '100%', opacity: 0}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ top: '0%', opacity: 1}))
        ])
      ]),
      // call child animations after end
      query(':enter', animateChild()),
    ]),
    transition('* <=> SecondPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'scale(0)', opacity: 0}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);