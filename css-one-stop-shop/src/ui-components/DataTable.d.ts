/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataTableOverridesProps = {
    DataTable?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13637783136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13637783137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37437783138"?: PrimitiveOverrideProps<FlexProps>;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.37783140"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37337783141"?: PrimitiveOverrideProps<FlexProps>;
    "Feature B"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.37783143"?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37437783145"?: PrimitiveOverrideProps<FlexProps>;
    "Feature C"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.37783147"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37337783148"?: PrimitiveOverrideProps<FlexProps>;
    "Feature D"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.37783150"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DataTableProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DataTableOverridesProps | undefined | null;
}>;
export default function DataTable(props: DataTableProps): React.ReactElement;
