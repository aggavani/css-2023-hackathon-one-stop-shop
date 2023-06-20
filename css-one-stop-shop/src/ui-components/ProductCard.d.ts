/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCardOverridesProps = {
    "72"?: PrimitiveOverrideProps<TextProps>;
    ProductCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<FlexProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Badge37783330?: PrimitiveOverrideProps<FlexProps>;
    Badge37783331?: PrimitiveOverrideProps<FlexProps>;
    Badge37783332?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product."?: PrimitiveOverrideProps<TextProps>;
    Quote?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "\u201CThis is a quote.\u201C"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    Feature37783339?: PrimitiveOverrideProps<FlexProps>;
    Icon37783340?: PrimitiveOverrideProps<ViewProps>;
    Vector37783341?: PrimitiveOverrideProps<IconProps>;
    Fast?: PrimitiveOverrideProps<TextProps>;
    Feature37783343?: PrimitiveOverrideProps<FlexProps>;
    Icon37783344?: PrimitiveOverrideProps<ViewProps>;
    Vector37783345?: PrimitiveOverrideProps<IconProps>;
    Fun?: PrimitiveOverrideProps<TextProps>;
    Feature37783347?: PrimitiveOverrideProps<FlexProps>;
    Icon37783348?: PrimitiveOverrideProps<ViewProps>;
    Vector37783349?: PrimitiveOverrideProps<IconProps>;
    Flirty?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProductCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductCardOverridesProps | undefined | null;
}>;
export default function ProductCard(props: ProductCardProps): React.ReactElement;
