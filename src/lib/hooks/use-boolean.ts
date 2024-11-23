import { useState } from "react";

const useBoolean = (init?: boolean) => {
  const [state, setState] = useState(!!init);

  const on = () => setState(true);

  const off = () => setState(false);

  const toggle = () => setState((state) => !state);

  return [state, { on, off, toggle }] as const;
};

export default useBoolean;
