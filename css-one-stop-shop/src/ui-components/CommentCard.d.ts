/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCardOverridesProps = {
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37783400?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame37783404?: PrimitiveOverrideProps<FlexProps>;
    Frame37783405?: PrimitiveOverrideProps<FlexProps>;
    Frame37783406?: PrimitiveOverrideProps<FlexProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum"?: PrimitiveOverrideProps<TextProps>;
    Frame37783410?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37783411?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share37783413?: PrimitiveOverrideProps<FlexProps>;
    Share37783414?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37783415?: MyIconProps;
    "9937783416"?: PrimitiveOverrideProps<TextProps>;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37783418?: MyIconProps;
    "9937783419"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37783421?: MyIconProps;
    "9937783422"?: PrimitiveOverrideProps<TextProps>;
    MyIcon37783423?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
