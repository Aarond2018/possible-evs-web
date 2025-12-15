import React, { ReactNode } from 'react';

export type iHandleChange<T = HTMLInputElement> = (
  e: React.ChangeEvent<T>
) => void;
export type iHandleBlur<T = HTMLInputElement> = (
  e: React.FocusEvent<T>
) => void;

export type iHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type iHandleClick<T = HTMLButtonElement> = (
  e?: React.MouseEvent<T>
) => void;
export type iHandleKeyboard<T = HTMLInputElement> = (
  e: React.KeyboardEvent<T>
) => void;
export type iHandleUI<T = HTMLDivElement> = (e: React.UIEvent<T>) => void;

type NestedPaths<T> = {
  [K in keyof T]: K extends string | number
    ? T[K] extends object
      ? `${K}` | `${K}.${NestedPaths<T[K]>}`
      : `${K}`
    : never;
}[keyof T];

type InputType = 'input' | 'date' | 'email' | 'password' | 'file' | 'number';
type SelectType = 'select' | 'multi-select' | 'auto-select';

export type FieldTypeBase = {
  label?: string;
  type?:
    | InputType
    | SelectType
    | 'checkbox'
    | 'date'
    | 'time'
    | 'textarea'
    | 'switch';
  rules?: {
    required?: boolean;
    valueAsNumber?: boolean;
    disabled?: boolean;
  };
  placeHolder?: string;
  colStart?: number;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  otherInfo?: string;
};
export type FieldTypeNested<T> = FieldTypeBase & {
  name: keyof T | NestedPaths<T>;
};
export type FieldTypes<T> = FieldTypeBase & {
  name: keyof T;
};

//did this to enable fields with field grouping without breaking previous code
export type FieldGroup<T> = {
  groupLabel?: string;
  fields: FieldTypes<T>[];
};

export type FieldEntryWithGrouping<T> = FieldTypes<T> | FieldGroup<T>;
//--------------------------------------

export type VoidFunctionWithArg<T = undefined> = (arg: T) => void;
export type VoidFunction = () => void;
