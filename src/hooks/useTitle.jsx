import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Event Management & Ticketing System`;
  }, [title]);
};

export default useTitle;