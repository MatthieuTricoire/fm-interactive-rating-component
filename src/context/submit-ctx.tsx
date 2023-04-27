import { ReactNode, createContext, useState } from "react";

interface SubmitContext {
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
}

export const SubmitContext = createContext<SubmitContext>({
  isSubmit: false,
  setIsSubmit: () => null,
});

export const SubmitContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const value = { isSubmit, setIsSubmit };
  return (
    <SubmitContext.Provider value={value}>{children}</SubmitContext.Provider>
  );
};
