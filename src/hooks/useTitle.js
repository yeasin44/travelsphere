import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Travelsphere`;
  }, [title]);
};
export default useTitle;
