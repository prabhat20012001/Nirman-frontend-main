import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Team from "./Components/Team/Team";
import { Context } from "./ContextApi";
import { useContext, useEffect } from "react";
import AddMember from "./Components/CMS Section/AddMember/AddMember"
import ModifyMembers from "./Components/CMS Section/ModifyMembers/ModifyMembers"
import AddTestimonial from "./Components/CMS Section/AddTestimonials/AddTestimonials"
import ModifyTestimonials from "./Components/CMS Section/ModifyTestimonials/ModifyTestimonials"
import CMS from "./Components/CMS Section/Cms"
import axios from "axios";
import Gallery from "./Components/Gallery/Gallery";
import UploadMedia from "./Components/CMS Section/UploadMedia/UploadMedia";
import DeleteMedia from "./Components/CMS Section/DeleteMedia/DeleteMedia";
import Project from "./Components/Projects/Projects";
import IndividualProjectPage from "./Components/Projects/IndividualProjectPage";
import IndividualBlogPage from "./Components/IndividualBlogPage/IndividualBlogPage";
import Certificates from "./Components/CertificatesPage/Cartificates";
import MediaCoverage from "./Components/MediaCoverage/MediaCoveragePage";
import OngoingInitiatives from "./Components/Ongoing Initiatives/OngoingInitiatives";
import Mission from "./Components/Mission/Mission";
import Impact from "./Components/Impact/Impact";
import ProgressBar from "./ProgressBar";
import Messages from "./Components/CMS Section/Messages/Messages";
import SocialMedia from "./Components/SocialMediaSection/SocialMedia";
import Careers from "./Components/Careers/Careers";
import JobApplicationPage from "./Components/Careers/JobApplicationPage";
import AddJobs from "./Components/CMS Section/AddJobsSection/AddJobs";
import JobApplications from "./Components/CMS Section/JobAplications/JobApplications";
import LoginPage from "./Components/LoginPage/Login";
import AccessDeclined from "./Components/AccessDeclined/AccessDeclined";
import AddBlogs from "./Components/CMS Section/AddBlogs/AddBlogs";
import AddProjects from "./Components/CMS Section/AddProjects/AddProjects";
import GalleryImageViewer from "./Components/Gallery/GalleryImageViewer";
import AddGalleryMedia from "./Components/CMS Section/AddGalleryMedia/AddGalleryMedia";
import Centers from "./Components/Centers/Centers";
import CenterDetailsPage from "./Components/Centers/CenterDetailsPage";
import AddEvents from "./Components/CMS Section/AddEvents/AddEvents";
import DeleteEvents from "./Components/CMS Section/DeleteEvents/DeleteEvents";
import EventDetailsPage from "./Components/LandingPage/EventsSection/EventDetailsPage";
import ModifyJobs from "./Components/CMS Section/ModifyJobs/ModifyJobs";
import ModifyBlogs from "./Components/CMS Section/ModifyBlogs/ModifyBlogs"
import ModifyProjects from "./Components/CMS Section/ModifyProjects/ModifyProjects"
import AddLivesAffected from "./Components/CMS Section/AddLivesAffected/AddLivesAffected";
import ModifyLivesAffected from "./Components/CMS Section/ModifyLivesAffected/ModifyLivesAffected";
import AddCenters from "./Components/CMS Section/AddCenter/AddCenter";
import ModifyCenters from "./Components/CMS Section/ModifyCenters/ModifyCenter";
import ActivityReport from "./Components/ActivityReport/ActivityReport";
import AuditReport from "./Components/AuditReport/AuditReport";
import AddActivityReports from "./Components/CMS Section/AddActivityReport/AddActivityReport";
import AddAuditReports from "./Components/CMS Section/AddAuditReport/AddAuditReport";
import ModifyActivityReports from "./Components/CMS Section/ModifyActivityReports/ModifyActivityReports";
import ModifyAuditReports from "./Components/CMS Section/ModifyAuditReports/ModifyAuditReports";
import { Box, Button } from "@mui/material";
function App() {
  let {apiLink,setActivityReportImages,setAuditReportImages,setCentre, setActivityReport, setAuditReport, items, setItems, images, setImages, setCareerData, isAdmin, setIsAdmin, projectsData, setProjectsData, page, setPage, maxPage, setMaxPage, setEvents } = useContext(Context)
  let navigate = useNavigate()
  useEffect(() => {
    try{
      axios.get(apiLink+"/centers").then(res => {
        setCentre(res.data)
      })
      axios.get(apiLink+"/ActivityReports").then(res => {
        let data = res.data;
        for (let i = data.length - 1; i >= 0; i++) {
            if (data[i].images.length != 0) {
                setActivityReportImages(data[i].images)
                break
            }
        }
        setActivityReport(res.data);
    });
    axios.get(apiLink+"/AuditReports").then(res => {
      let data = res.data;
      for (let i = data.length - 1; i >= 0; i++) {
          if (data[i].images.length != 0) {
              setAuditReportImages(data[i].images)
              break
          }
      }
      setAuditReport(res.data);
  });
      axios.get(apiLink+"/team").then(res => {
        console.log(res)
        setItems(res.data)
      })
      axios.get(apiLink+"/jobs").then(res => {
        setCareerData(res.data)
      })
      axios.get(apiLink+"/Projects").then(res => {
        setProjectsData(res.data)
      })
      axios.get(apiLink+"/event").then((res) => {
        let data = res.data;
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(data.slice(0, 3))
      });
    }
    catch(err){
      console.log(err)
    }
  }, [])

  useEffect(() => {
    axios.get(apiLink+`/gallery/pagination?page=${page}&limit=4`).then(res => {
      console.log(res)
      setMaxPage(Math.ceil(res.data["x-total-count"] / 4));
      setImages(res.data.finalData);
    })
  }, [page])
  return (
    <Box position={"relative"}>
    <Box position={"fixed"} zIndex={1000} bottom={["10px","20px","30px","40px"]} left={["10px","20px","30px","40px"]}>
      <Button variant="contained" sx={{color:"white"}} onClick={()=>{navigate("/login")}}>
      Login
      </Button>
    </Box>
      <SocialMedia />
      <ProgressBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/About" element={<LandingPage />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Project" element={<LandingPage />} />
        <Route path="/OutInitiatives" element={<LandingPage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Gallery/:index" element={<GalleryImageViewer />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/MediaCoverage" element={<MediaCoverage />} />
        <Route path="/OngoingInitiatives" element={<OngoingInitiatives />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Impact" element={<Impact />} />
        <Route path="/Career" element={<Careers />} />
        <Route path="/Centers" element={<Centers />} />
        <Route path="/Centers/:CenterID" element={<CenterDetailsPage />} />
        <Route path="/Projects/:projectID" element={<IndividualProjectPage />} />
        <Route path="/Blog/:blogID" element={<IndividualBlogPage />} />
        <Route path="/Career/:JobID" element={<JobApplicationPage />} />
        <Route path="/Events/:EventID" element={<EventDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ActivityReport" element={<ActivityReport />} />
        <Route path="/AuditReport" element={<AuditReport />} />
        <Route path="CMS" element={isAdmin ? <CMS /> : <AccessDeclined />}>
          <Route index path='AddMember' element={<AddMember />} />
          <Route path='UpdateMembers' element={<ModifyMembers />} />
          <Route path='AddTestimonial' element={<AddTestimonial />} />
          <Route path='ModifyTestimonials' element={<ModifyTestimonials />} />
          <Route path='AddMedia' element={<UploadMedia />} />
          <Route path='UploadGallery' element={<DeleteMedia />} />
          <Route path='AddJobs' element={<AddJobs />} />
          <Route path='ModifyJobs' element={<ModifyJobs />} />
          <Route path='JobApplications' element={<JobApplications />} />
          <Route path='Messages' element={<Messages />} />
          <Route path='AddBlogs' element={<AddBlogs />} />
          <Route path='ModifyBlogs' element={<ModifyBlogs />} />
          <Route path='AddProjects' element={<AddProjects />} />
          <Route path='ModifyProjects' element={<ModifyProjects />} />
          <Route path='AddGalleryMedia' element={<AddGalleryMedia />} />
          <Route path='AddEvents' element={<AddEvents />} />
          <Route path='DeleteEvents' element={<DeleteEvents />} />
          <Route path='AddLivesAffected' element={<AddLivesAffected />} />
          <Route path='ModifyLivesAffected' element={<ModifyLivesAffected />} />
          <Route path='AddCenter' element={<AddCenters />} />
          <Route path='ModifyCenters' element={<ModifyCenters />} />
          <Route path='AddActivityReports' element={<AddActivityReports />} />
          <Route path='ModifyActivityReports' element={<ModifyActivityReports />} />
          <Route path='AddAuditReports' element={<AddAuditReports />} />
          <Route path='ModifyAuditReports' element={<ModifyAuditReports />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}
export default App;
