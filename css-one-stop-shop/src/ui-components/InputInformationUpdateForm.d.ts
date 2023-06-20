/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InputInformation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InputInformationUpdateFormInputValues = {
    scope?: string;
    attribute?: string;
    marketplace?: string;
};
export declare type InputInformationUpdateFormValidationValues = {
    scope?: ValidationFunction<string>;
    attribute?: ValidationFunction<string>;
    marketplace?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputInformationUpdateFormOverridesProps = {
    InputInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scope?: PrimitiveOverrideProps<TextFieldProps>;
    attribute?: PrimitiveOverrideProps<TextFieldProps>;
    marketplace?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InputInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: InputInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inputInformation?: InputInformation;
    onSubmit?: (fields: InputInformationUpdateFormInputValues) => InputInformationUpdateFormInputValues;
    onSuccess?: (fields: InputInformationUpdateFormInputValues) => void;
    onError?: (fields: InputInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputInformationUpdateFormInputValues) => InputInformationUpdateFormInputValues;
    onValidate?: InputInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InputInformationUpdateForm(props: InputInformationUpdateFormProps): React.ReactElement;
