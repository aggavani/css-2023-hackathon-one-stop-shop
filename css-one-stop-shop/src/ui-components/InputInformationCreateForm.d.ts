/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InputInformationCreateFormInputValues = {
    scope?: string;
    attribute?: string;
    marketplace?: string;
};
export declare type InputInformationCreateFormValidationValues = {
    scope?: ValidationFunction<string>;
    attribute?: ValidationFunction<string>;
    marketplace?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputInformationCreateFormOverridesProps = {
    InputInformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scope?: PrimitiveOverrideProps<TextFieldProps>;
    attribute?: PrimitiveOverrideProps<TextFieldProps>;
    marketplace?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InputInformationCreateFormProps = React.PropsWithChildren<{
    overrides?: InputInformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InputInformationCreateFormInputValues) => InputInformationCreateFormInputValues;
    onSuccess?: (fields: InputInformationCreateFormInputValues) => void;
    onError?: (fields: InputInformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputInformationCreateFormInputValues) => InputInformationCreateFormInputValues;
    onValidate?: InputInformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function InputInformationCreateForm(props: InputInformationCreateFormProps): React.ReactElement;
