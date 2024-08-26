import DataTable, { TableColumn } from "react-data-table-component";
import { IuserDataInterface } from "../../interfaces/userDataInterface";
import { IDataTable } from "../../interfaces/dataTableInterface";
import { PulseAnimation } from "../../../assets/animations/PulseAnimation";
import { MdDelete } from "react-icons/md";
import { useMemo, useState } from "react";

const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
}: {
  filterText: string;
  onFilter: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) => (
  <div className="flex items-center gap-2 p-2  rounded-md">
    <input
      id="search"
      type="text"
      placeholder="Rechercher par nom"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <MdDelete
      className="cursor-pointer text-red-500"
      size={24}
      onClick={onClear}
    />
  </div>
);

export const DataTableComponent = ({
  columns,
  data,
  customStyles,
  isLoading,
  handleRowClick,
}: IDataTable) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div>
      <DataTable
        progressComponent={<PulseAnimation pulseColor="#800080" />}
        pagination
        progressPending={isLoading}
        customStyles={customStyles}
        className="min-w-full table-auto bg-slate-700"
        columns={columns as TableColumn<IuserDataInterface>[]}
        data={filteredItems}
        subHeader
        onRowClicked={(e, row) => handleRowClick(e, row)}
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </div>
  );
};
