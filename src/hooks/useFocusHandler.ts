import { useState, useMemo } from 'react';

export function useFocusHandler() {
  const [isFocused, setFocused] = useState(false);
  const focusHandler = useMemo(
    () => ({
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onToggle: () => setFocused((prev) => !prev),
    }),
    []
  );

  return [isFocused, focusHandler] as const;
}
