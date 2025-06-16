// This is a shim for web and Android where the tab bar is generally opaque.
export default undefined;

// On non-iOS platforms, we use a fixed value that approximates the tab bar height
// This ensures consistent behavior across platforms
export function useBottomTabOverflow() {
  return 0;
}
