import { useFetchData } from "../Hooks/useFetch";

export const Home = () => {
  const { mydata } = useFetchData();

  return (
    <>
      <p>Current PI value: {mydata?.pi}</p>
      <p>Circumference of the sun: {mydata?.circumference} kilometers</p>
    </>
  );
};
