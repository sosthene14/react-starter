import { Primitive } from "react-data-table-component/dist/DataTable/types";

export interface TableColumn<T> {
    name: string;
    selector: (row: T) => string|number|Primitive;
  }
  
  export interface IuserDataInterface {
    _id?: {
      $oid: string;
    };
    name: string;
    firstName: string;
    email: string;
    isVerified: boolean;
    isGoogle: boolean;
    isbanned: boolean;
    created: {
      $date: string;
    };
    account_type?: string;
  }
  