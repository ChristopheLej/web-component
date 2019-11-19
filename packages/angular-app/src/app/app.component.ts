import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app'

  onClick() {
    console.log('click on button')
  }

  onClickPrimary() {
    console.log('click on primary button')
  }

  onClickSecondary() {
    console.log('click on secondary button')
  }
}
