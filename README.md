# NativeTabs mounts all router components prematurely and never unmounts screens, unlike JS Tabs

## Problem Description
When using `NativeTabs` in Expo Router, all router components are mounted immediately upon tab instantiation, as evidenced by the console.log statements in the `useEffect` hooks of the two screens (`index.tsx` and `two.tsx`). This behavior does not occur with the JavaScript-based `Tabs` component. Additionally, the screens are never unmounted, leading to abnormal component lifecycle behavior.

This issue can result in degraded performance, excessive resource consumption, and unexpected app behavior, as unnecessary components remain active.

## Steps to Reproduce
1. Clone the repro repository: https://github.com/federi95/expo-native-tabs-repro
2. Install dependencies: `bun install` (or `npm install` if not using Bun)
3. Start the app: `npx expo start`
4. Navigate between tabs and observe the console for mounting/unmounting logs.
5. Compare the behavior by switching from `NativeTabs` to `Tabs` in the `_layout.tsx` file under `(tabs)/`.

## Expected Behavior
- With `NativeTabs`: Screens should only be mounted when they are displayed and unmounted when inactive, similar to the behavior of JS `Tabs`.
- No premature mounting of all router components.

## Actual Behavior
- All screens are mounted immediately when `NativeTabs` starts.
- Screens are never unmounted, even when navigating away.
- Console.log statements in `useEffect` confirm the early mounting.

## Environment
- **Expo SDK**: [insert version, e.g., 51.x]
- **React Native**: [insert version]
- **Expo Router**: [insert version]
- **OS**: macOS [version]
- **Device/Emulator**: [iOS Simulator/Android Emulator, specify version]
- **Node.js**: [version]

## Relevant Code
- Main file: `app/(tabs)/_layout.tsx` (contains the tabs configuration)
- Screens: `app/(tabs)/index.tsx` and `app/(tabs)/two.tsx` (with `useEffect` and console.log to track mounting)

If needed, attach screenshots of the console or a video of the behavior.

## Additional Notes
This repro was created specifically to isolate the issue. The repository is public and can be used for testing fixes or investigations.