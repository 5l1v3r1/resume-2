import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
onScrollDown () {
      console.log('scrolled down!!')
  }

  onScrollUp () {
    console.log('scrolled up!!')
  }

}
