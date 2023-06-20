/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCheckoutOverridesProps = {
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31337783528"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    TextField37783531?: PrimitiveOverrideProps<FlexProps>;
    TextField37783532?: PrimitiveOverrideProps<FlexProps>;
    Divider37783533?: PrimitiveOverrideProps<ViewProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Shipping37783535?: PrimitiveOverrideProps<TextProps>;
    TextField37783536?: PrimitiveOverrideProps<FlexProps>;
    TextField37783537?: PrimitiveOverrideProps<FlexProps>;
    TextField37783538?: PrimitiveOverrideProps<FlexProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31337783541"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Cart (2)"?: PrimitiveOverrideProps<TextProps>;
    "$101.70"?: PrimitiveOverrideProps<TextProps>;
    Divider37783545?: PrimitiveOverrideProps<ViewProps>;
    "Frame 316"?: PrimitiveOverrideProps<FlexProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$320.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 317"?: PrimitiveOverrideProps<FlexProps>;
    Shipping37783550?: PrimitiveOverrideProps<TextProps>;
    "$15.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 318"?: PrimitiveOverrideProps<FlexProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    "$26.80"?: PrimitiveOverrideProps<TextProps>;
    Divider37783555?: PrimitiveOverrideProps<ViewProps>;
    "Frame 319"?: PrimitiveOverrideProps<FlexProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$361.80"?: PrimitiveOverrideProps<TextProps>;
    Divider37783559?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type FormCheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCheckoutOverridesProps | undefined | null;
}>;
export default function FormCheckout(props: FormCheckoutProps): React.ReactElement;
