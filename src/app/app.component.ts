import { Component } from '@angular/core';
import '../../public/scss/app.scss';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public emailHash = "0619f090764faef6eefbd0adac62e947";
  onScrollDown () {
      console.log('scrolled down!!')
  }

  onScrollUp () {
    console.log('scrolled up!!')
  }
}
