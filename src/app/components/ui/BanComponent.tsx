import { useState } from "react";
import { Modal, Button, Input, message } from "antd";
import { FaBan } from "react-icons/fa";

const BanComponent = ({ userName, visible, onClose }: { userName: string; visible: boolean; onClose: () => void }) => {
  const [banReason, setBanReason] = useState<string>("");

  const handleBan = () => {
    if (banReason.trim() === "") {
      message.error("Veuillez fournir une raison pour le bannissement.");
      return;
    }
    
    console.log(`Bannissement de ${userName} pour la raison: ${banReason}`);
    message.success(`Utilisateur ${userName} banni avec succès.`);
    
    
    setBanReason("");
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      title={`Bannir l'utilisateur ${userName}`}
      className="bg-gray-800 rounded-lg"
    >
      <div className="space-y-4">
        <p className="text-white text-sm">Veuillez entrer une raison pour bannir cet utilisateur.</p>
        
        <Input.TextArea
          rows={4}
          placeholder="Raison du bannissement"
          value={banReason}
          onChange={(e) => setBanReason(e.target.value)}
          className="bg-gray-700 hover:bg-gray-700 focus-within:bg-slate-700 text-white placeholder-gray-400 border-none"
        />
        
        <div className="flex justify-end gap-2">
          <Button type="default" onClick={onClose}>
            Annuler
          </Button>
          <Button
            type="primary"
            danger
            icon={<FaBan />}
            onClick={handleBan}
            className="bg-red-600 hover:bg-red-700"
          >
            Envoyer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BanComponent;
