import { Modal } from "flowbite-react";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ModalComponent = ({
  children,
  handleClose,
  modalSize,
}: {
  children: ReactNode;
  handleClose: (value: boolean) => void;
  modalSize: string;
}) => {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (!openModal) {
      handleClose(false);
    }
  }, [openModal, handleClose]);

  return (
    <Modal
      show={openModal}
      size={modalSize}
      dismissible
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="dark:bg-slate-800 bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-800 bg-slate-100 rounded-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </Modal.Body>
    </Modal>
  );
};
