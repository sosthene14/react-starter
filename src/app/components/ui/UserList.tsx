import { TableStyles } from "react-data-table-component";
import { tableUserColumn } from "../../constants/constants";
import { DataTableComponent } from "../logic/DataTable";
import { customStylesTable } from "../../style/customStyle";
import { useGetAllUser } from "../../hooks/useGetAllUser";
import { IuserDataInterface } from "../../interfaces/userDataInterface";
import { useUserData } from "../../../store/dataStore";
import { ModalComponent } from "../../layout/ModalComponent";
import { Button } from "antd";
import { FaBan, FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import BanComponent from "./BanComponent";
import ChangeUserAccountType from "./ChangeUserAccountType";
import ChangeEmailModal from "./ChangeUserEmail";
import ChangeVerifiedStatusModal from "./ChangeVerification";

export const UserList = () => {
  const { isLoading, setIsModalOpened, isModalOpened } = useGetAllUser();
  const { data } = useUserData();
  const [currentUser, setCurrentUser] = useState<IuserDataInterface | null>(
    null
  );

  const handleRowClick = (row: IuserDataInterface) => {
    setCurrentUser(row);
    setIsModalOpened(true);
  };

  return (
    <div className="w-full justify-center">
      {isModalOpened && (
        <ModalComponent
          children={
            <UserModalElement data={currentUser as IuserDataInterface} />
          }
          modalSize="2xl"
          handleClose={setIsModalOpened}
        />
      )}

      <p className="text-center text-lg text-white -mt-10 pb-10">
        Liste des utilisateurs de ROCOLIS
      </p>
      {data !== null && (
        <DataTableComponent
          handleRowClick={handleRowClick}
          isLoading={isLoading}
          customStyles={customStylesTable as TableStyles}
          data={data as unknown as IuserDataInterface[]}
          columns={tableUserColumn}
        />
      )}
    </div>
  );
};

const UserModalElement = ({ data }: { data: IuserDataInterface }) => {
  const [isOpen, setIopen] = useState(false);
  const [isOpenChangeAccount, setIsOpenChangeAccount] = useState(false);
  const [isOpenChangeEmail, setIsOpenChangeEmail] = useState(false);
  const [isOpenVerificationStatus, setIsOpenVerificationStatus] = useState(false)
  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white space-y-4">
      <h3 className="text-lg font-semibold">
        Actions disponibles pour l'utilisateur : {data.firstName} {data.name}
      </h3>
      <BanComponent
        visible={isOpen}
        onClose={() => setIopen(false)}
        userName={data.name}
      />
      <ChangeUserAccountType
        onChangeAccountType={() => console.log("a")}
        userName={data.name}
        onClose={() => setIsOpenChangeAccount(false)}
        userAccountType={data.account_type || ""}
        visible={isOpenChangeAccount}
      />
      <ChangeEmailModal
        currentEmail={data.email}
        onChangeEmail={() => console.log("a")}
        onClose={() => setIsOpenChangeEmail(false)}
        userName={data.name}
        visible={isOpenChangeEmail}
      />
      <ChangeVerifiedStatusModal
      onChangeVerifiedStatus={()=>console.log("dd")}
      isVerified={data.isVerified}
      userName={data.name}
      visible={isOpenVerificationStatus}
      onClose={() => setIsOpenVerificationStatus(false)}
      />
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-red-600 rounded-md">
          <span>Bannir cet utilisateur</span>
          <Button
            type="primary"
            danger
            icon={<FaBan />}
            onClick={() => setIopen(true)}
          >
            Bannir
          </Button>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-600 rounded-md">
          <span>Changer le type de compte</span>
          <Button
            type="default"
            icon={<MdEdit />}
            onClick={() => setIsOpenChangeAccount(true)}
          >
            Modifier
          </Button>
        </div>
        {
          /*     <div className="flex items-center justify-between p-3 bg-yellow-500 rounded-md">
          <span>Changer l'adresse email</span>
          <Button
            type="default"
            icon={<FaEnvelope />}
            onClick={() => setIsOpenChangeEmail(true)}
          >
            Changer email
          </Button>
        </div>  */
        }

    

        {data.isVerified && (
          <div className="flex items-center justify-between p-3 bg-green-600 rounded-md">
            <span>Marquer comme non vérifié</span>
            <Button
              type="default"
              icon={<FaCheck />}
              onClick={() => setIsOpenVerificationStatus(true)}
            >
              Non Vérifié
            </Button>
          </div>
        )}
        {!data.isVerified && (
          <div className="flex items-center justify-between p-3 bg-green-600 rounded-md">
            <span>Marquer comme vérifié</span>
            <Button
              type="default"
              icon={<FaCheck />}
              onClick={() => setIsOpenVerificationStatus(true)}
            >
              Vérifié
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
