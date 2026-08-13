import { useClickAway } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";

import { ModalOverlay } from "./styles";

interface ModalProps {
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
  closeOnOverlayClick?: boolean;
}

export const Modal = ({
  toggleModal,
  setToggleModal,
  children,
  style,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    if (closeOnOverlayClick) {
      setToggleModal(false);
    }
  });

  // Handler for clicking the overlay (backdrop)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if the click is directly on the overlay, not on the modal content
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      setToggleModal(false);
    }
  };

  // Prevent event bubbling from modal content
  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Use portal to render modal at document.body level
  // This prevents nested form issues and ensures proper stacking
  const modalContent = (
    <ModalOverlay
      dataDisplay={toggleModal}
      style={style}
      onClick={handleOverlayClick}
      data-testid="modal-overlay"
    >
      <div
        ref={ref}
        data-testid="modal-content"
        onClick={handleModalContentClick}
      >
        {children}
      </div>
    </ModalOverlay>
  );

  // Only use portal if document.body exists (client-side)
  if (typeof document !== "undefined" && document.body) {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};
