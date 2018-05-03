import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'devleague app'
  constructor(private api: ApiService) {
    this.api.get('').subscribe(console.log)
  }
}
