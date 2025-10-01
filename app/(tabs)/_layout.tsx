import MIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>First</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MIcons} name="home" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="two">
        <Label>Second</Label>
        {Platform.select({
          ios: <Icon sf="rectangle.grid.2x2.fill" />,
          android: (
            <Icon src={<VectorIcon family={MIcons} name="grid-view" />} />
          ),
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
