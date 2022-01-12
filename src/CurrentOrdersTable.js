import { useState } from "react";
import editLogo from "./edit-logo.svg";
import DatePickerDialog from "./DatePickerDialog";
const CurrentOrdersTable = () => {
  const [deliveryDate, setDeliveryDate] = useState("2022/01/12");
  const [displayDatePickerDialog, setDisplayDatePickerDialog] = useState(false);

  return (
    <div className="orders-table-container">
      <table className="orders-table">
        <thead className="orders-table-head">
          <tr>
            <th className="orders-table-heading">Count</th>
            <th className="orders-table-heading">Date Issued</th>
            <th className="orders-table-heading">Delivery Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7</td>
            <td>2022/01/12</td>
            <td>{deliveryDate}</td>
            <td>
              <img
                alt="yolo"
                src={editLogo}
                onClick={() => setDisplayDatePickerDialog((curr) => !curr)}
              ></img>
              <DatePickerDialog
                display={displayDatePickerDialog}
                setDeliveryDate={setDeliveryDate}
                setDisplayDatePickerDialog={setDisplayDatePickerDialog}
              ></DatePickerDialog>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CurrentOrdersTable;
