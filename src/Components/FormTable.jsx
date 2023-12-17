import { useContext } from "react";
import TableRow from "./TableRow";
import { FormContext } from "../Context/FormContext";

const FormTable = () => {
  const { clothInfo, setClothInfo } = useContext(FormContext);
  return (
    <div className="formTable">
      <table>
        <thead>
          <tr>
            <th>Cloth Name</th>
            <th>Cloth ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Color</th>
            <th>Size</th>
            <th>Date</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clothInfo.map((cloth) => (
            <TableRow key={cloth.clothId} cloth={cloth} />
          ))}
        </tbody>
      </table>
      <button onClick={() => setClothInfo([])} className="btn-danger">
        Remove all
      </button>
    </div>
  );
};

export default FormTable;
