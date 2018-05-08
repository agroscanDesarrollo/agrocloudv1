import { animate, state, style, transition, trigger } from '@angular/animations';


export const fadeIn=
trigger('fadeIn',[
    
    transition(':enter',[
        style({
            opacity:0,
            transform:'translateY(-2%)'            
        }),
        animate('200ms linear',style({
            opacity:1,
            transform:'translateY(0)'            
        }))
    ])
    
])