import { useEffect, useState } from "react";
import { HttpClient } from "../../services/HttpClient";
import { ICircumferenceData } from "../interfaces/circumference.interface";

export const useFetchData = () => {
  const [mydata, setMydata] = useState<ICircumferenceData>();

  const fetchData = async () => {
    try {
      const data = await HttpClient({
        method: 'get',
        path: '/spaceY/value',
      });

      setMydata(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData();

    controller.abort();
  }, []);

  return { mydata };
};
