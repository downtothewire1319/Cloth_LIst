import { useContext, useState } from "react";
import { FormContext } from "../Context/FormContext";

const FormData = () => {
  const { clothInfo, setClothInfo } = useContext(FormContext);
  const [inputValue, setInputValue] = useState({
    clothName: "",
    clothId: "",
    price: "",
    clothQuantity: "",
    color: "",
    size: "",
    date: "",
    description: "",
  });

  // destucture inputs
  const {
    clothName,
    clothId,
    price,

    clothQuantity,
    color,
    date,
    description,
  } = inputValue;

  // handle input value
  const handleChange = (e) => {
    const fildName = e.target.name;
    setInputValue({ ...inputValue, [fildName]: e.target.value });
  };

  // submit input value
  const handleSubmit = () => {
    setClothInfo([...clothInfo, inputValue]);
    setInputValue({
      clothName: "",
      clothId: "",
      price: "",
      clothQuantity: "",
      color: "",
      date: "",
      description: "",
    });
  };
  return (
    <div className="clothForm">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="clothName">Cloth Name:</label>
          <input
            onChange={handleChange}
            value={clothName}
            maxLength="15"
            type="text"
            required
            name="clothName"
            id="clothName"
          />
        </div>
        <div>
          <label htmlFor="clothId">Cloth ID:</label>
          <input
            onChange={handleChange}
            value={clothId}
            maxLength="15"
            type="text"
            required
            name="clothId"
            id="clothId"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            onChange={handleChange}
            min={1}
            max={100000}
            value={price}
            type="number"
            name="price"
            id="price"
          />
        </div>
        <div>
          <label htmlFor="clothQuantity">Cloth Quantity:</label>
          <input
            type="number"
            onChange={handleChange}
            value={clothQuantity}
            min="1"
            max="15"
            required
            name="clothQuantity"
            id="clothQuantity"
          />
        </div>
        <div>
          <label htmlFor="color">Choose a Color:</label>
          <select
            onChange={handleChange}
            value={color}
            name="color"
            id="color"
            required
          >
            <option value="">None</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
        <div>
          <p>Select Coloth Size:</p>
          <div className="clothSize" onChange={handleChange} required>
            <label htmlFor="mSize">
              <input required id="mSize" type="radio" name="size" value="M" /> M
            </label>

            <label htmlFor="lSize">
              <input required type="radio" name="size" id="lSize" value="L" /> L
            </label>

            <label htmlFor="xlSize">
              <input required id="xlSize" type="radio" name="size" value="XL" />
              XL
            </label>
          </div>
        </div>
        <label htmlFor="date">Manufacturing Date:</label>
        <input
          onChange={handleChange}
          value={date}
          required
          type="date"
          name="date"
          id="date"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          onChange={handleChange}
          value={description}
          maxLength="30"
          required
          name="description"
          id="description"
        ></textarea>
        <div>
          <label>
            <input required type="checkbox" name="termAndCondition" /> I accept
            all terms and conditions.
          </label>
        </div>

        <button type="submit">Add Cloth Info</button>
      </form>
    </div>
  );
};

export default FormData;
