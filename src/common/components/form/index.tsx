import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  SubmitHandler,
  Path,
  ControllerRenderProps,
  FormProviderProps,
  useFormState,
  // Control,
} from "react-hook-form";
import { cn as mergeClassName } from "@/common/lib/utils";
import { Label } from "../label";
// import dynamic from "next/dynamic";

// const DevTool = dynamic(
//   () => import("@hookform/devtools").then((mod) => mod.DevTool),
//   { ssr: false }
// );

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// const useFormField = () => {
//   const fieldContext = React.useContext(FormFieldContext);
//   const itemContext = React.useContext(FormItemContext);
//   const formState = useFormContext()?.formState;
//   const getFieldState = useFormContext()?.getFieldState;

//   const fieldState = getFieldState
//     ? getFieldState(fieldContext.name, formState)
//     : null;

//   if (!fieldContext) {
//     throw new Error("useFormField should be used within <FormField>");
//   }

//   const { id } = itemContext;

//   return {
//     id,
//     name: fieldContext.name,
//     formItemId: `${id}-form-item`,
//     formDescriptionId: `${id}-form-item-description`,
//     formMessageId: `${id}-form-item-message`,
//     ...formState,
//     ...fieldState,
//   };
// };

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { control } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { errors } = useFormState({
    control,
    name: fieldContext.name,
  });

  const error = errors[fieldContext.name];
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    error,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

export const FormFieldItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={mergeClassName("space-y-2 w-full", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormFieldItem.displayName = "FormFieldItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    required?: boolean;
  }
>(({ className, required, ...props }, ref) => {
  const { formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={mergeClassName(
        "block text-sm font-medium w-fit",
        required &&
          "relative after:content-['*'] after:absolute after:left-full after:text-red-500 after:ml-0.5",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <div
      ref={ref}
      id={formItemId}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      aria-invalid={!!error}
    >
      <Slot {...props} />
    </div>
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={mergeClassName("text-sm ", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();

  // Check if error is an array (for fields like `annexes`)
  const body = Array.isArray(error)
    ? error.map((err, index) => <p key={index}>{err.message}</p>)
    : error?.message || children;

  if (!body) {
    return null;
  }

  return (
    <div
      {...props}
      ref={ref}
      id={formMessageId}
      className="text-xs font-medium text-red-500 text-left"
    >
      {<>{body}</>}
    </div>
  );
});
FormMessage.displayName = "FormMessage";

interface FormProps<T extends FieldValues> extends FormProviderProps<T> {
  onSubmit: SubmitHandler<T>;
  className?: string;
  children: React.ReactNode;
  stopPropagation?: boolean;
}

const Form = <T extends FieldValues>({
  onSubmit,
  children,
  className,
  stopPropagation = false, // Default value for stopPropagation
  ...form
}: FormProps<T>) => {
  const submitHandler = (e: React.BaseSyntheticEvent) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }

    form.handleSubmit(onSubmit)(e);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={submitHandler}
        className={mergeClassName(
          "border border-gray-100 shadow-gray-100 rounded-lg",
          className
        )}
      >
        {children}
        {/* DevTools for debugging */}
        {/* <DevTool control={form.control as Control<FieldValues>} /> */}
      </form>
    </FormProvider>
  );
};

interface FormItemProps<T extends FieldValues> {
  name: Path<T>;
  render: (field: ControllerRenderProps<T, Path<T>>) => React.ReactNode;
  label?: string;
  className?: Partial<Record<string, string>>;
  required?: boolean;
}

const FormItem = <T extends FieldValues>({
  name,
  render,
  label,
  className,
  required,
}: FormItemProps<T>) => {
  const control = useFormContext<T>()?.control;

  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field }) => (
        <FormFieldItem className={className?.item}>
          {label && (
            <FormLabel
              className={mergeClassName(className?.label)}
              required={required}
              htmlFor={name}
            >
              {label}
            </FormLabel>
          )}
          <FormControl>{render(field)}</FormControl>
          <FormMessage />
        </FormFieldItem>
      )}
    />
  );
};

export { useFormField, Form, FormItem };
