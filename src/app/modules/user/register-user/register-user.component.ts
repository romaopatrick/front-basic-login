import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { match } from '../domain/validator/custom-validations';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUserComponent implements OnInit {

  passwordMaxLength = 25;
  showPasswordHint = false;
  
  constructor(private fb: FormBuilder) {
    
  }

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]
  }, {
    validators: [match('password', 'cpassword')]
  });

  
  setPasswordHintVisibilityTrue() {
    this.showPasswordHint = true
  }
  setPasswordHintVisibilityFalse() {
    this.showPasswordHint = false
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
  }
}
