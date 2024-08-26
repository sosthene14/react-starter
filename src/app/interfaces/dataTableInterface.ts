import { IuserDataInterface } from "./userDataInterface";
import { TableColumn, TableStyles } from "react-data-table-component";
export interface IDataTable {
  columns: TableColumn<IuserDataInterface>[];
  data: IuserDataInterface[];
  customStyles : TableStyles
  isLoading:boolean
  handleRowClick:((row: IuserDataInterface, e: React.MouseEvent) => void) 
}
