/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "Need assistance?"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    "US HELP CENTER"?: PrimitiveOverrideProps<TextProps>;
    "/"?: PrimitiveOverrideProps<TextProps>;
    "SUBMIT A REQUEST"?: PrimitiveOverrideProps<TextProps>;
    SelectField37783457?: PrimitiveOverrideProps<FlexProps>;
    TextField37783458?: PrimitiveOverrideProps<FlexProps>;
    SelectField37783459?: PrimitiveOverrideProps<FlexProps>;
    TextField37783460?: PrimitiveOverrideProps<FlexProps>;
    TextField37783461?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2837783463"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2837783464"?: PrimitiveOverrideProps<FlexProps>;
    Icon37783465?: PrimitiveOverrideProps<ViewProps>;
    Vector37783466?: PrimitiveOverrideProps<IconProps>;
    Instagram?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    Icon37783469?: PrimitiveOverrideProps<ViewProps>;
    Vector37783470?: PrimitiveOverrideProps<IconProps>;
    Twitter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
