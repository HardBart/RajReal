"use client";

import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormFieldWrapper } from "@/components/forms/form-field-wrapper";

export function YesNoSelect<T extends FieldValues>({
  control,
  name,
  label,
  optional = true,
  options,
}: {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  optional?: boolean;
  options?: { value: string; label: string }[];
}) {
  const opts = options ?? [
    { value: "tak", label: "Tak" },
    { value: "nie", label: "Nie" },
  ];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormFieldWrapper
          label={label}
          htmlFor={name}
          optional={optional}
          error={fieldState.error?.message}
        >
          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
            items={Object.fromEntries(opts.map((o) => [o.value, o.label]))}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="Wybierz" />
            </SelectTrigger>
            <SelectContent>
              {opts.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormFieldWrapper>
      )}
    />
  );
}
