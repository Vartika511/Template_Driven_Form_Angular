import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDirective,
      multi: true
    }
  ]
})
export class PasswordDirective implements Validator {
  @Input('appPassword') passwordRequirements: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    if (!password) {
      
      return null;
    }

    
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    
    const isValid =
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialCharacter &&
      password.length >= 8;

    if (!isValid) {
      
      return {
        passwordRequirements: true
      };
    }

    
    return null;
  }
}
