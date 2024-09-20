import React, { useEffect } from "react";
import s from "./Modal.module.css";
import { ModalProps } from "../../todos";

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleBackDropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.content}>
        <>
          <h1 className={s.title}>Edit your 'To do'</h1>
          <hr />
        </>
        <button className={s.closeBtn} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
