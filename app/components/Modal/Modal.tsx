import { ModalProps } from "@/app/types";
import styles from "./Modal.module.css";

const Modal = ({ onClose, children, heading }: ModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.content}>
        <div className={styles.modalHeader}>
          <span>{heading}</span>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
