import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/common/Header";
import JobSearchHeader from "./components/common/JobSearchHeader";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// ─── Route-level code splitting: each page loads only when navigated to ───
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const AllProgramsPage = React.lazy(() => import("./pages/AllProgramsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const EventsPage = React.lazy(() => import("./pages/EventsPage"));
const DiplomaAndAdvancedDiplomaPage = React.lazy(() => import("./pages/Programmes/DiplomaAndAdvancedDiplomaPage"));
const UpskillingAndReskillingPage = React.lazy(() => import("./pages/Programmes/UpskillingAndReskillingPage"));
const DepartmentsPage = React.lazy(() => import("./pages/DepartmentsPage"));
const CurriculumPage = React.lazy(() => import("./pages/CurriculumPage"));
const AcademicCalendarPage = React.lazy(() => import("./pages/AcademicCalenderPage"));
const FacultiesPage = React.lazy(() => import("./pages/FacultiesPage"));
const TrainingMethodologyPage = React.lazy(() => import("./pages/TrainingMethodologyPage"));
const AdmissionsPage = React.lazy(() => import("./pages/AdmissionsPage"));
const CampusInfrastructurePage = React.lazy(() => import("./pages/InfrastructurePage"));
const TrainingCentersPage = React.lazy(() => import("./pages/TrainingCentersPage"));
const CampusLife = React.lazy(() => import("./pages/CampusLife"));
const Labs = React.lazy(() => import("./pages/Labs"));
const Courses = React.lazy(() => import("./pages/Courses"));
const Collaborations = React.lazy(() => import("./pages/Collaborations"));
const ITIPage = React.lazy(() => import("./pages/Programmes/ITIPage"));
const WorkIntegratedTrainingPage = React.lazy(() => import("./pages/Programmes/WorkIntegratedTrainingPage"));
const ResearchESGKnowledgeHub = React.lazy(() => import("./pages/ResearchESGKnowledgeHub"));
const WomenInMiningPage = React.lazy(() => import("./pages/Programmes/WomenInMiningPage"));
const OperatorLicencingPage = React.lazy(() => import("./pages/Programmes/OperatorLicencingPage"));
const ProgramsPage = React.lazy(() => import("./pages/ProgramsPage"));
const KnowledgeHub = React.lazy(() => import("./pages/Knowledge"));

// ─── Lightweight loading fallback ───
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/placements" element={<Collaborations />} />
          <Route path="/our-programmes" element={<AllProgramsPage />} />
          <Route path="/contact-us" element={<ContactPage/>} />
          <Route path="/events" element={<EventsPage/>} />
          <Route path="/our-programmes/diploma-programs" element={<DiplomaAndAdvancedDiplomaPage />} />
          <Route path="/our-programmes/upskilling-and-reskilling-program" element={<UpskillingAndReskillingPage />} />
          <Route path="/our-programmes/iti-program" element={<ITIPage />} />
          <Route path="/our-programmes/work-integrated-training-program" element={<WorkIntegratedTrainingPage />} />
          <Route path="/our-programmes/women-in-mining" element={<WomenInMiningPage />} />
          <Route path="/our-programmes/operator-licensing" element={<OperatorLicencingPage />} />

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
          <Route path="/academics/knowledge-hub" element={<ResearchESGKnowledgeHub />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />


          <Route path="/programs" element={<ProgramsPage />} />


        </Routes>
      </Suspense>
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