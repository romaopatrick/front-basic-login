import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { match } from '../domain/validator/confirmed.validator';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    
  }

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]
  }, 
  {
    validators: [match('password', 'cpassword')]
  });

  
  ngOnInit(): void {
    console.log(this.registerForm.hasError('required'))
  }

  onSubmit() {
    console.log(this.registerForm.get('password')?.errors);
  }
}


