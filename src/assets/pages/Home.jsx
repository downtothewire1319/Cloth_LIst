import { useEffect, useState } from "react";
import FormData from "../../Components/FormData";
import FormTable from "../../Components/FormTable";
import "./home.css";
import { FormContext } from "../../Context/FormContext";
import { getClothInfoFromLocalStorage } from "../../utils/getClothInfoFromLocalStorage";
const Home = () => {
  const [clothInfo, setClothInfo] = useState(getClothInfoFromLocalStorage());

  // set cloth info for local storage
  useEffect(() => {
    localStorage.setItem("clothInfo", JSON.stringify(clothInfo));
  }, [clothInfo]);
  return (
    <FormContext.Provider value={{ clothInfo, setClothInfo }}>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Cloth List App </h1>
        <div className="clothWraper">
          <FormData />
          {clothInfo.length > 0 ? (
            <FormTable />
          ) : (
            <div>
              <h1>No Cloths added yet!</h1>
              <img
                style={{ width: "200px" }}
                src="https://assets-v2.lottiefiles.com/a/45434ade-1152-11ee-b2f2-13bf2f90a03d/1sNiKDOwow.gif"
                alt="empty bag"
              />
            </div>
          )}
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default Home;
