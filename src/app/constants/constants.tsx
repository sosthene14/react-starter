import { MdDashboard } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaChartLine, FaUser } from "react-icons/fa6";
import { BsFillLuggageFill } from "react-icons/bs"; // Import manquant
import { IuserDataInterface } from "../interfaces/userDataInterface";
import { TableColumn } from "react-data-table-component";
import { maskEmail } from "../utils/utils";

export const navItems = [
  { id: 0, label: "Utilisateur", icon: <FaUser /> },
  { id: 1, label: "Dashboard", icon: <MdDashboard /> },
  { id: 2, label: "Mes annonces", icon: <TfiAnnouncement /> },
  { id: 4, label: "Mes colis", icon: <BsFillLuggageFill /> },
  { id: 5, label: "Notifications", icon: <IoIosNotifications /> },
  { id: 6, label: "Performances", icon: <FaChartLine /> },
  { id: 7, label: "Paramètres", icon: <IoMdSettings /> },
];

export const tableUserColumn: TableColumn<IuserDataInterface>[] = [
  {
    name: "Compte crée",
    sortable: true,
    selector: (row: IuserDataInterface) =>
      new Date(row.created.$date).toLocaleDateString(),
  },
  {
    name: "Nom",
    sortable: true,
    selector: (row: IuserDataInterface) => row.name,
  },
  {
    name: "Prenom",
    sortable: true,
    selector: (row: IuserDataInterface) => row.firstName,
  },
  {
    name: "Email",
    sortable: true,
    selector: (row: IuserDataInterface) => maskEmail(row.email),
  },
  {
    name: "Compte vérifié",
    sortable: true,
    selector: (row: IuserDataInterface) => (row.isVerified ? "Oui" : "Non"),
    cell: (row: IuserDataInterface) => (
      <span
        style={{
          color: row.isVerified ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {row.isVerified ? "Oui" : "Non"}
      </span>
    ),
  },
  {
    name: "Compte crée avec google",
    sortable: true,
    selector: (row: IuserDataInterface) => (row.isGoogle ? "Oui" : "Non"),
  },
  {
    name: "Type de compte",
    sortable: true,
    selector: (row: IuserDataInterface) => row.account_type || "N/A",
  },
];
