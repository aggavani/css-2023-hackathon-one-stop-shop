/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout2OverridesProps = {
    HeroLayout2?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Auto Layout Vertical37891388"?: PrimitiveOverrideProps<FlexProps>;
    "Auto Layout Vertical37891389"?: PrimitiveOverrideProps<FlexProps>;
    "Auto Layout Horizontal37891391"?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to the CSS-One-Stop Shop!"?: PrimitiveOverrideProps<TextProps>;
    "Auto Layout Horizontal37891393"?: PrimitiveOverrideProps<FlexProps>;
    Vector37891400?: PrimitiveOverrideProps<IconProps>;
    Vector37891401?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HeroLayout2Props = React.PropsWithChildren<Partial<ViewProps> & {
    autoLayoutHorizontal37891393?: React.ReactNode;
} & {
    overrides?: HeroLayout2OverridesProps | undefined | null;
}>;
export default function HeroLayout2(props: HeroLayout2Props): React.ReactElement;
