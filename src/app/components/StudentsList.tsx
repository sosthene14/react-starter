import React, { ReactNode, useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown, MenuProps, message, Modal } from "antd";
import { BigLoader } from "../../assets/animations/Loader";
import useTimedFalse from "../hooks/useTimedData";

export interface Student {
  firstName: string;
  lastName: string;
}

export interface Group {
  _id: {
    $oid: string;
  };
  groupe: Student[];
}

interface StudentListProps {
  courseType: string;
  groups: Group[];
  onRemoveStudent: (index: number) => void;
  students: Student[];
  maximum: number;
}

const StudentList: React.FC<StudentListProps> = ({
  groups,
  onRemoveStudent,
  students,
  courseType,
  maximum,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isModalOpened2, setIsModalOpened2] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [groupeIndex, setGroupeIndex] = useState<number | null>(null);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => setIsModalOpened2(true)}>Ajouter un étudiant</a>,
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => setIsModalOpened(true)}
          className="text-red-400 cursor-pointer"
        >
          Supprimer un étudiant
        </div>
      ),
    },
  ];

  return (
    <div className="bg-slate-100 mt-10 p-5 rounded-md">
      {isModalOpened && (
        <CustomModal
          children={<DeleteStudent groupIndex={groupeIndex||0} courseType={courseType} groups={groups} />}
          handleClose={setIsModalOpened}
        />
      )}
      {isModalOpened2 && (
        <CustomModal
          children={
            <AddStudent
              groupeIndex={groupeIndex || 0}
              maximum={maximum}
              students={groups}
              groupId={groupId}
              courseType={courseType}
            />
          }
          handleClose={setIsModalOpened2}
        />
      )}

      {students.map((student, index) => (
        <li
          key={index}
          className="flex gap-5 justify-between font-semibold items-center mb-2"
        >
          <p className="flex text-lg items-center gap-2">
            {" "}
            <PiStudentBold />
            {student.firstName} {student.lastName}
          </p>

          <button
            onClick={() => onRemoveStudent(index)}
            className="bg-red-500 text-white ml-10 px-2 py-1 rounded"
          >
            Retirer
          </button>
        </li>
      ))}
       {students && students.length > 0 && (
        <div className="w-full h-1 bg-slate-300 mb-4"></div>
      )}
      {groups?.map((group, index: number) => (
        <div key={group._id.$oid} className="">
          <div className="flex justify-between items-center">
            <p className="mb-2 text-lg font-bold text-sky-500">
              Groupe {index + 1}
            </p>
            <p
              onClick={() => {
                setGroupId(group._id.$oid), setGroupeIndex(index);
              }}
              className="flex items-center text-lg gap-2"
            >
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <BsThreeDotsVertical
                  size={25}
                  className="font-bold hover:bg-slate-200 cursor-pointer rounded-full text-sky-500"
                />
              </Dropdown>
            </p>
          </div>
          <ul>
            {group?.groupe?.map((student, index) => (
              <li
                key={index}
                className="flex ml-5 gap-5 justify-between font-semibold items-center mb-2"
              >
                <div className="flex items-center text-lg gap-2">
                  <PiStudentBold />
                  {student.firstName} {student.lastName}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
     
    </div>
  );
};

export default StudentList;

const CustomModal = ({
  children,
  handleClose,
}: {
  children: ReactNode;
  handleClose: (value: boolean) => void;
}) => {
  return (
    <Modal
      cancelText="Annuler"
      closeIcon={<></>}
      okButtonProps={{ disabled: true, className: "hidden" }}
      centered
      open={true}
      onCancel={() => handleClose(false)}
    >
      {children}
    </Modal>
  );
};

const DeleteStudent = ({
  groups,
  courseType,
  groupIndex
}: {
  groups: Group[];
  courseType: string;
  groupIndex:number
}) => {
  const [isLoading, setIsLoading] = useTimedFalse(false);

  const deleteFromGroup = async (groupId: string, studentIndex: number) => {
    setIsLoading(true);
    const dataToUpload = {
      indexStudent: studentIndex,
      _id: groupId,
      courseType: courseType,
    };
    await fetch("http://127.0.0.1:5000/api/v1/delete-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToUpload),
    }).then((response) => {
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      setIsLoading(false);
      window.location.reload();
      message.success("Etudiant supprimé avec succes");
      return response.json();
    });
  };
  return (
    <div>
      <BigLoader isLoading={isLoading} />
     
          <ul>
            {groups[groupIndex]?.groupe?.map((student, index) => (
              <li
                onClick={() => deleteFromGroup(groups[groupIndex]._id.$oid, index)}
                key={index}
                className="flex hover:bg-slate-200 rounded-md p-2  gap-5 justify-between font-semibold items-center mb-2"
              >
                <p className="flex cursor-pointer  items-center text-lg gap-2">
                  <PiStudentBold />
                  {student.firstName} {student.lastName}
                </p>
              </li>
            ))}
          </ul>
        </div>
   
  );
};

const AddStudent = ({
  courseType,
  groupId,
  students,
  maximum,
  groupeIndex,
}: {
  courseType: string;
  groupId: string;
  students: Group[];
  maximum: number;
  groupeIndex: number;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useTimedFalse(false);

  const handleAddStudent = async () => {
    if (firstName.length === 0 || lastName.length === 0) {
      message.warning("Veuillez remplir les champs");
      return;
    }
    if (students[groupeIndex].groupe.length >= maximum) {
      console.log(students);
      message.warning(maximum + " étudiants maximum");
      return;
    }
    setIsLoading(true);
    const dataToUpload = {
      _id: groupId,
      courseType: courseType,
      firstName: firstName,
      lastName: lastName,
    };
    await fetch("http://127.0.0.1:5000/api/v1/add-student-to-group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToUpload),
    }).then((response) => {
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      setIsLoading(false);
      window.location.reload();
      message.success("Groupe ajouté avec succes");
      return response.json();
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <BigLoader isLoading={isLoading} />
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="p-2 mb-2 w-full border border-gray-300 rounded mr-2"
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="p-2 w-full border border-gray-300 rounded mr-2"
      />
      <button
        onClick={handleAddStudent}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ajouter l'étudiant
      </button>
    </div>
  );
};
