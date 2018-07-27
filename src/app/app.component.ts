import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contacts';

  selectedUser;

  onChildChange(emittedValue) {
    this.selectedUser = emittedValue;
  }

  onSave(formValue) {
    console.log(formValue.value);
  }
}
