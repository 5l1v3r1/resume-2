import { Component, } from '@angular/core';
@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html'
})
export class SideBarComponent {
    
    public emailHash = "0619f090764faef6eefbd0adac62e947";

    public counter: number;
   
    onScrollDown() {
        console.log('scrolled down!!')
    }

    onScrollUp() {
        console.log('scrolled up!!')
    }

    addNumbers(x: number, y: number) {
        return x + y;
    }
}
