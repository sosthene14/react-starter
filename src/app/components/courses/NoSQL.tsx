import { useCallback, useEffect, useState } from "react";
import StudentForm from "../StudentsForm";
import StudentList, { Group } from "../StudentsList";
import { message } from "antd";
import useTimedFalse from "../../hooks/useTimedData";
import { BigLoader } from "../../../assets/animations/Loader";
import { emptyIllustration } from "../../../assets/image";
import jsPDF from "jspdf";

export interface Student {
  firstName: string;
  lastName: string;
}

export default function NoSQL() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loadedStudents, setLoadedStudents] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useTimedFalse(false);
  const getGroups = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://127.0.0.1:5000/api/v1/get-groups/nosql`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
    setIsLoading(false);

    setLoadedStudents(response.data);
  }, [setIsLoading]);
  const addStudent = (firstName: string, lastName: string) => {
    setStudents([...students, { firstName, lastName }]);
  };

  const removeStudent = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };
  useEffect(() => {
    getGroups();
  }, [getGroups]);
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);

    let yPosition = 20;

    doc.text("Liste des groupes des étudiants NoSQL", 20, yPosition);
    yPosition += 10;

    loadedStudents.forEach((group, groupIndex) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(0, 102, 204);
      doc.text(`Groupe ${groupIndex + 1}`, 20, yPosition);
      yPosition += 7;

      group.groupe.forEach((student, studentIndex) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(
          `${studentIndex + 1}. ${student.firstName} ${student.lastName}`,
          30,
          yPosition
        );
        yPosition += 7;
      });

      yPosition += 5;
    });

    doc.save("oracle_students_list.pdf");
  };

  const handleAddGroup = async () => {
    if (students.length > 2) {
      message.warning(2 + " étudiants maximum");
      return;
    }
    setIsLoading(true);
    const dataToUpload = {
      groupe: students,
      courseType: "nosql",
    };
    await fetch("http://127.0.0.1:5000/api/v1/upload-group", {
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
    <div className="container flex justify-center flex-col items-center mx-auto p-4">
      <BigLoader isLoading={isLoading} />
      <h1 className="text-2xl font-bold mb-4">Liste des étudiants NoSQL</h1>

      <StudentForm onAddStudent={addStudent} />
      {students.length > 0 || loadedStudents.length > 0 ? (
        <StudentList
          maximum={2}
          courseType="nosql"
          groups={loadedStudents}
          onRemoveStudent={removeStudent}
          students={students}
        />
      ) : (
        <p className="mt-5 w-[50%]">
          <img src={emptyIllustration} />
        </p>
      )}
      {loadedStudents.length > 0 && (
        <button
          onClick={exportPDF}
          className="bg-blue-500 mt-5 text-white px-4 py-2 rounded"
        >
          Exporter la liste des étudiants
        </button>
      )}
      {students.length > 0 && (
        <div className="flex gap-5">
          <button
            onClick={handleAddGroup}
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded"
          >
            Confirmer le groupe
          </button>
        </div>
      )}
    </div>
  );
}
