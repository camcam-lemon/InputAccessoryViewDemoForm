import { useState, useCallback } from 'react';

export function useFormValue(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((text: string) => {
    setValue(text);
  }, []);

  return [value, onChange, setValue] as const;
}
