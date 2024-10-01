import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlName: string,
  formControlName: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordControlName);
    const rePasswordFormControl = control.get(formControlName);
    const areMatching =
      passwordFormControl?.value == rePasswordFormControl?.value;

    return areMatching ? null : { matchPasswordsValidator: true };
  };
}
