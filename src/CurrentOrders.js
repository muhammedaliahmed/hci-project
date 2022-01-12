import CurrentOrdersTable from "./CurrentOrdersTable";
import Header from "./Header";
export default function CurrentOrders() {
  return (
    <>
      <Header selected="current-orders" />
      <CurrentOrdersTable />
    </>
  );
}
