import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null
    }
    return {returnInvalid: true}
  }
}