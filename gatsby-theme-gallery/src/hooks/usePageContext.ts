import React, { useContext } from "react";

const pageContext = React.createContext(null);

const usePageContext = () => useContext(pageContext);

export default usePageContext;
