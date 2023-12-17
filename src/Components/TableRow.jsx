import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FormContext } from "../Context/FormContext";
const TableRow = ({ cloth }) => {
  const {
    clothName,
    size,
    clothId,
    price,
    color,
    clothQuantity,
    date,
    description,
  } = cloth;

  const { clothInfo, setClothInfo } = useContext(FormContext);

  // delete cloth info
  const handleDelete = (id) => {
    const filterdClothInfo = clothInfo.filter((cloth) => cloth.clothId !== id);
    setClothInfo(filterdClothInfo);
  };
  return (
    <tr>
      <td>{clothName} </td>
      <td>{clothId} </td>
      <td>{clothQuantity}</td>
      <td>{price * clothQuantity}</td>
      <td>{color}</td>
      <td>{size}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>
        <MdDelete
          title="Delete"
          onClick={() => handleDelete(clothId)}
          style={{ color: "#d63031", fontSize: "20px", cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
