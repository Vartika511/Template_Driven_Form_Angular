import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userData: any = {}; 
  submitted: boolean = false;

  onSubmit(form: any) {
    if (form.valid) {
      
      console.log(this.userData);


      alert('Form Submitted Successfully');


      this.userData = {};
      form.resetForm();
      this.submitted = true;
    } else {

      console.log("Please fix the validation errors.");
    }
  }

  clearForm(form: any) {
    form.resetForm();
    this.submitted = false;
  }
  test(){
    console.log("Hello")
    return true;
  }
}
