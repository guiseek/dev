import {FormArray, FormControl, FormGroup} from '@angular/forms'

type GetTypedForm<T> =
  // Caso T seja um array
  T extends Array<infer U>
    ? // retorne U
      U extends string
      ? FormControl<string>
      : U extends number
      ? FormControl<number>
      : FormArray<
          // e U seja um objeto
          U extends object
            ? // inicie a verificacao para U
              FormGroup<TypedFormModel<U>>
            : // ou retorne U
              FormControl<U>
        >
    : // caso seja objeto
    T extends object
    ? // inicie a verificação para T
      FormGroup<TypedFormModel<T>>
    : // caso seja boleano
    T extends boolean
    ? // retorne boolean
      FormControl<boolean>
    : // caso seja string
    T extends string
    ? // retorne string
      FormControl<T | string>
    : // caso seja número
    T extends number
    ? // retorne número
      FormControl<number>
    : // ou retorne T
      FormControl<T>

type TypedFormModel<T> = {
  // Verifique cada tipo do model
  [K in keyof T]: GetTypedForm<T[K]>
}

export type {TypedFormModel, GetTypedForm}
