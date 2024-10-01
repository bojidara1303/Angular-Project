import { ValidatorFn } from "@angular/forms"

export function emailValidator(): ValidatorFn {
    const regExp = new RegExp(/\S+@\S+\.\S+/);

    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value)
        return isEmailInvalid ? null : { emailValidator: true }
    }
}