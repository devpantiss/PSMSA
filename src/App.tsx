import "./App.css";
import Header from "./components/common/Header";
import JobSearchHeader from "./components/common/JobSearchHeader";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllProgramsPage from "./pages/AllProgramsPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import RecognitionofPriorLearningPage from "./pages/Programmes/RecognitionofPriorLearningPage";
import ApprenticeshipAndDualTrainingPage from "./pages/Programmes/ApprenticeshipAndDualTrainingPage";
import DiplomaAndAdvancedDiplomaPage from "./pages/Programmes/DiplomaAndAdvancedDiplomaPage";
import UpskillingAndReskillingPage from "./pages/Programmes/UpskillingAndReskillingPage";
import IndustryAllignedCertificationPage from "./pages/Programmes/IndustryAllignedCertificationPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import CurriculumPage from "./pages/CurriculumPage";
import AcademicCalendarPage from "./pages/AcademicCalenderPage";
import FacultiesPage from "./pages/FacultiesPage";
import TrainingMethodologyPage from "./pages/TrainingMethodologyPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import CampusInfrastructurePage from "./pages/InfrastructurePage";
import TrainingCentersPage from "./pages/TrainingCentersPage";
import CampusLife from "./pages/CampusLife";
import Labs from "./pages/Labs";
import Courses from "./pages/Courses";
import Collaborations from "./pages/Collaborations";
import ITIPage from "./pages/Programmes/ITIPage";
import AdvancedDiplomaPage from "./pages/Programmes/AdvancedDiplomaPage";
import WorkIntegratedTrainingPage from "./pages/Programmes/WorkIntegratedTrainingPage";

function LayoutWrapper() {
  const location = useLocation();
  const HIDE_LAYOUT_ROUTES = [
    "/job-search-engine/business/auth",
    "/job-search-engine/job-seekers/auth",
  ];
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname);
  const isJobSearchRoute = location.pathname.startsWith("/job-search-engine");

  return (
    <>
      {!hideLayout && (isJobSearchRoute ? <JobSearchHeader /> : <Header />)}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/placements" element={<Collaborations />} />
        <Route path="/our-programmes" element={<AllProgramsPage />} />
        <Route path="/contact-us" element={<ContactPage/>} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/our-programmes/recognition-of-prior-learning" element={<RecognitionofPriorLearningPage />} />
        <Route path="/our-programmes/apprenticeship-and-dual-training" element={<ApprenticeshipAndDualTrainingPage />} />
        <Route path="/our-programmes/diploma-programs" element={<DiplomaAndAdvancedDiplomaPage />} />
        <Route path="/our-programmes/upskilling-and-reskilling-program" element={<UpskillingAndReskillingPage />} />
        <Route path="/our-programmes/industry-alligned-certification" element={<IndustryAllignedCertificationPage />} />
        <Route path="/our-programmes/iti-program" element={<ITIPage />} />
        <Route path="/our-programmes/advanced-diploma-program" element={<AdvancedDiplomaPage />} />
        <Route path="/our-programmes/work-integrated-training-program" element={<WorkIntegratedTrainingPage />} />
        <Route path="/academics/our-departments" element={<DepartmentsPage />} />
        <Route path="/academics/our-curriculum" element={<CurriculumPage />} />
        <Route path="/academics/academic-calender" element={<AcademicCalendarPage />} />
        <Route path="/academics/faculties" element={<FacultiesPage />} />
        <Route path="/academics/training-methodology" element={<TrainingMethodologyPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/Infra" element={<CampusInfrastructurePage />} />
        <Route path="/training-centers" element={<TrainingCentersPage />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/academics/labs" element={<Labs />} />
        <Route path="/academics/courses" element={<Courses />} />

      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;