/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCardOverridesProps = {
    ReviewCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.37783362"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.37783363"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating37783366?: PrimitiveOverrideProps<FlexProps>;
    Rating37783367?: PrimitiveOverrideProps<FlexProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
    "$99/Night"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ReviewCardOverridesProps | undefined | null;
}>;
export default function ReviewCard(props: ReviewCardProps): React.ReactElement;
