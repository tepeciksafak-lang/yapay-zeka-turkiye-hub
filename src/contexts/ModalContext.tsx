import { createContext, useContext, ReactNode, useState } from 'react';

interface ModalContextType {
  isQuickAnalysisOpen: boolean;
  openQuickAnalysis: () => void;
  closeQuickAnalysis: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isQuickAnalysisOpen, setIsQuickAnalysisOpen] = useState(false);

  const openQuickAnalysis = () => setIsQuickAnalysisOpen(true);
  const closeQuickAnalysis = () => setIsQuickAnalysisOpen(false);

  return (
    <ModalContext.Provider value={{
      isQuickAnalysisOpen,
      openQuickAnalysis,
      closeQuickAnalysis
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};