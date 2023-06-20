/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HeroLayout2(props) {
  const { autoLayoutHorizontal37891393, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroLayout2")}
      {...rest}
    >
      <View
        width="1440px"
        height="867px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="12px"
        left="19px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="523px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="calc(50% - 219px - 8.5px)"
          left="calc(50% - 261.5px - -30.5px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Auto Layout Vertical37891388")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Auto Layout Vertical37891389")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Auto Layout Horizontal37891391")}
            ></Flex>
            <Text
              fontFamily="Manrope"
              fontSize="96px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="80px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Welcome to the CSS-One-Stop Shop!"
              {...getOverrideProps(
                overrides,
                "Welcome to the CSS-One-Stop Shop!"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="296px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={autoLayoutHorizontal37891393}
            {...getOverrideProps(overrides, "Auto Layout Horizontal37891393")}
          ></Flex>
        </Flex>
        <Icon
          width="796.96px"
          height="570.6px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 822.6524658203125,
            height: 607.072265625,
          }}
          paths={[
            {
              d: "M796.961 256.017C796.961 399.024 457.821 724.245 461.94 485.751C466.059 247.256 413.884 512.034 120.054 402.034C-173.776 292.034 132.411 0 390.542 0C648.673 0 796.961 113.01 796.961 256.017Z",
              fill: "rgba(239,147,100,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1027.98px"
          left="381.65px"
          transformOrigin="top left"
          transform="rotate(177.33deg)"
          {...getOverrideProps(overrides, "Vector37891400")}
        ></Icon>
        <Icon
          width="352px"
          height="597px"
          viewBox={{ minX: 0, minY: 0, width: 352, height: 597 }}
          paths={[
            {
              d: "M352 267.861C352 417.485 202.209 757.753 204.029 508.224C205.848 258.695 182.803 535.723 53.0251 420.634C-76.7531 305.545 58.483 0 172.494 0C286.505 0 352 118.238 352 267.861Z",
              fill: "rgba(139,123,207,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-18.45%"
          bottom="49.6%"
          left="82.64%"
          right="-7.08%"
          {...getOverrideProps(overrides, "Vector37891401")}
        ></Icon>
      </View>
    </View>
  );
}
