"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import FeedbackMessage from "../ui/feedback/FeedbackMessage";

interface FeedbackContextType {
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
  clearMessages: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const messageTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearMessageTimeout = () => {
    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
      messageTimeout.current = null;
    }
  };

  const showError = (message: string) => {
    clearMessageTimeout();

    setSubmitSuccess(null);
    setSubmitError(message);

    messageTimeout.current = setTimeout(() => {
      setSubmitError(null);
      messageTimeout.current = null;
    }, 3000);
  };

  const showSuccess = (message: string) => {
    clearMessageTimeout();

    setSubmitError(null);
    setSubmitSuccess(message);

    messageTimeout.current = setTimeout(() => {
      setSubmitSuccess(null);
      messageTimeout.current = null;
    }, 3000);
  };

  const clearMessages = () => {
    clearMessageTimeout();

    setSubmitError(null);
    setSubmitSuccess(null);
  };

  useEffect(() => {
    return () => {
      clearMessageTimeout();
    };
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        showError,
        showSuccess,
        clearMessages,
      }}
    >
      {submitError && <FeedbackMessage type="error" message={submitError} />}

      {submitSuccess && <FeedbackMessage type="success" message={submitSuccess} />}

      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);

  if (!context) {
    throw new Error("useFeedback debe utilizarse dentro de FeedbackProvider");
  }

  return context;
};
