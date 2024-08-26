import { useState } from "react";
import { Modal, Button, Switch, message } from "antd";
import { FaCheckCircle } from "react-icons/fa";

const ChangeVerifiedStatusModal = ({
  userName,
  isVerified,
  visible,
  onClose,
  onChangeVerifiedStatus,
}: {
  userName: string;
  isVerified: boolean;
  visible: boolean;
  onClose: () => void;
  onChangeVerifiedStatus: (newStatus: boolean) => void;
}) => {
  const [newStatus, setNewStatus] = useState<boolean>(isVerified);

  const handleStatusChange = () => {
    onChangeVerifiedStatus(newStatus);
    message.success(`Statut de vérification de ${userName} changé avec succès.`);
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      title={`Changer le statut de vérification pour ${userName}`}
      className="bg-gray-800 rounded-lg"
    >
      <div className="space-y-4">
        <p className="text-white text-sm">Changer le statut de vérification :</p>
        
        <div className="flex items-center gap-2">
          <span className="text-white">Vérifié</span>
          <Switch
            checked={newStatus}
            onChange={(checked) => setNewStatus(checked)}
            className="bg-gray-700"
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <Button type="default" onClick={onClose}>
            Annuler
          </Button>
          <Button
            type="primary"
            icon={<FaCheckCircle />}
            onClick={handleStatusChange}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Changer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeVerifiedStatusModal;
