import { useState } from "react";
import { Modal, Button, Input, message } from "antd";
import { FaEnvelope } from "react-icons/fa";

const ChangeEmailModal = ({
  userName,
  currentEmail,
  visible,
  onClose,
  onChangeEmail,
}: {
  userName: string;
  currentEmail: string;
  visible: boolean;
  onClose: () => void;
  onChangeEmail: (newEmail: string) => void;
}) => {
  const [newEmail, setNewEmail] = useState<string>(currentEmail);

  const handleEmailChange = () => {
    if (!newEmail || !/\S+@\S+\.\S+/.test(newEmail)) {
      message.error("Veuillez entrer une adresse email valide.");
      return;
    }

    onChangeEmail(newEmail);
    message.success(`Adresse email de ${userName} changée avec succès.`);
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      title={`Changer l'adresse email pour ${userName}`}
      className="bg-gray-800 rounded-lg"
    >
      <div className="space-y-4">
        <p className="text-white text-sm">Entrez la nouvelle adresse email :</p>
        
        <Input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Nouvelle adresse email"
          className="bg-gray-700 hover:bg-gray-700 focus-within:bg-slate-700 text-white placeholder-gray-400 border-none"
        />
        
        <div className="flex justify-end gap-2">
          <Button type="default" onClick={onClose}>
            Annuler
          </Button>
          <Button
            type="primary"
            icon={<FaEnvelope />}
            onClick={handleEmailChange}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Changer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeEmailModal;
