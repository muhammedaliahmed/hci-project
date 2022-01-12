const DatePickerDialog = ({
  display,
  setDeliveryDate,
  setDisplayDatePickerDialog,
}) => {
  return (
    display && (
      <div className="date-picker-dialog">
        <input
          type="date"
          onChange={(e) => {
            setDeliveryDate(e.target.value);
            setDisplayDatePickerDialog(false);
          }}
        />
      </div>
    )
  );
};
export default DatePickerDialog;
