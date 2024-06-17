import { useRef } from "react";
import { createContext, useState } from "react";

export const Context = createContext();
export default function ContextProvider({ children }) {
  let [centre, setCentre] = useState([]);
  let [activityReport, setActivityReport] = useState([]);
  let [activityReportImages, setActivityReportImages] = useState([])
  let [auditReport, setAuditReport] = useState([]);
  let [auditReportImages, setAuditReportImages] = useState([])
  let [items, setItems] = useState([]);
  let [images, setImages] = useState([]);
  let [careerData, setCareerData] = useState([]);
  let [isAdmin, setIsAdmin] = useState(false);
  let [projectsData, setProjectsData] = useState([]);
  let [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  let productsCardRef = useRef(null);
  let apiLink = "https://nirman-ngo-backend.onrender.com"
  //  apiLink = "http://localhost:3001"

  return (
    <Context.Provider
      value={{
        apiLink,
        activityReportImages, setActivityReportImages,
        auditReportImages, setAuditReportImages,
        centre,
        setCentre,
        activityReport,
        setActivityReport,
        auditReport,
        setAuditReport,
        items,
        setItems,
        images,
        setImages,
        careerData,
        setCareerData,
        productsCardRef,
        isAdmin,
        setIsAdmin,
        projectsData,
        setProjectsData,
        page,
        setPage,
        maxPage,
        setMaxPage,
        events,
        setEvents,
      }}
    >
      {children}
    </Context.Provider>
  );
}
