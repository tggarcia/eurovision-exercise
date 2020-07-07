import { trigger, state, style, transition, animate } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      'margin-top': '6px',
      'padding-left': '10px',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      'margin-top': '6px',
      'padding-left': '10px',
      opacity: 1,
      
    })
  ),
  transition('hide => show', animate('200ms ease-in')),
  transition('show => hide', animate('200ms ease-out'))
]);