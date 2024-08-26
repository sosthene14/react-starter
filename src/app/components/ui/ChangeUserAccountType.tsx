import { useState } from "react";
import { Modal, Button, Select, message } from "antd";
import { FaBan } from "react-icons/fa";

const { Option } = Select;

const ChangeUserAccountType = ({
  userName,
  userAccountType,
  visible,
  onClose,
  onChangeAccountType,
}: {
  userName: string;
  userAccountType: string;
  visible: boolean;
  onClose: () => void;
  onChangeAccountType: (newType: string) => void;
}) => {
  const [selectedAccountType, setSelectedAccountType] = useState(userAccountType);

  const handleChangeType = () => {
    if (!selectedAccountType) {
      message.error("Veuillez sélectionner un type de compte.");
      return;
    }
    
    onChangeAccountType(selectedAccountType);
    message.success(`Type de compte de ${userName} changé en ${selectedAccountType}.`);
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      title={`Changer le type de compte pour ${userName}`}
  
    >
      <div className="space-y-4">
        <p className="text-white text-sm">Sélectionnez le nouveau type de compte :</p>
        
        <Select
          defaultValue={userAccountType}
          onChange={setSelectedAccountType}
          className="w-full"
          style={{ backgroundColor: "#1F2937", color: "#fff" }}
        >
          {userAccountType === "free" ? (
            <Option value="premium">Premium</Option>
          ) : (
            <Option value="free">Free</Option>
          )}
        </Select>
        
        <div className="flex justify-end gap-2">
          <Button type="default" onClick={onClose}>
            Annuler
          </Button>
          <Button
            type="primary"
            icon={<FaBan />}
            onClick={handleChangeType}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Changer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeUserAccountType;
