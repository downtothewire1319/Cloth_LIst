export const getClothInfoFromLocalStorage = () => {
  const data = localStorage.getItem("clothInfo");
  return data ? JSON.parse(data) : [];
};
