import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Chairman from './pages/Chairman';
import ExecutiveDirector from './pages/ExecutiveDirector';
import Principal from './pages/Principal';
import VicePrincipal from './pages/VicePrincipal';
import GoverningCouncil from './pages/GoverningCouncil';
import StrategicPlan from './pages/StrategicPlan';
import DPharm from './pages/DPharm';
import BPharm from './pages/BPharm';
import PharmD from './pages/PharmD';
import MPharm from './pages/MPharm';
import DepartmentOfPharmaceutics from './pages/DepartmentOfPharmaceutics';
import DepartmentOfPharmaceuticalChemistry from './pages/DepartmentOfPharmaceuticalChemistry';
import DepartmentOfPharmacology from './pages/DepartmentOfPharmacology';
import DepartmentOfPharmacognosy from './pages/DepartmentOfPharmacognosy';
import DepartmentOfPharmacyPractice from './pages/DepartmentOfPharmacyPractice';
import CurriculumDevelopmentCouncil from './pages/CurriculumDevelopmentCouncil';
import NationalConferences from './pages/NationalConferences';
import AboutIQAC from './pages/AboutIQAC';
import IQACComposition from './pages/IQACComposition';
import AISHE from './pages/AISHE';
import Feedback from './pages/Feedback';
import StakeholderFeedback from './pages/StakeholderFeedback';
import ActionTaken from './pages/ActionTaken';
import EvidenceOfActionTaken from './pages/EvidenceOfActionTaken';
import AnalysisOfFeedback from './pages/AnalysisOfFeedback';
import AntiDiscrimination from './pages/AntiDiscrimination';
import AntiRagging from './pages/AntiRagging';
import GenderSensitization from './pages/GenderSensitization';
import SCSTCommittee from './pages/SCSTCommittee';
import InternalComplaintsCommittee from './pages/InternalComplaintsCommittee';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutTrust from './pages/AboutTrust';

import Criteria1 from './pages/Criteria1';
import Criteria2 from './pages/Criteria2';
import Criteria3 from './pages/Criteria3';
import Criteria4 from './pages/Criteria4';
import Criteria5 from './pages/Criteria5';
import Criteria6 from './pages/Criteria6';
import Criteria7 from './pages/Criteria7';
import Placement from './pages/Placement';
import IIC from './pages/IIC';
import Alumni from './pages/Alumni';
import Parambariyam from './pages/Parambariyam';
import Iyarkai from './pages/Iyarkai';
import Avathara from './pages/Avathara';
import SmartClassroom from './pages/SmartClassroom';
import Internet from './pages/Internet';
import Hostel from './pages/Hostel';
import Transport from './pages/Transport';
import WasteManagement from './pages/WasteManagement';
import FoodCourt from './pages/FoodCourt';
import Library from './pages/Library';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-trust" element={<AboutTrust />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/executive-director" element={<ExecutiveDirector />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/viceprincipal" element={<VicePrincipal />} />
        <Route path="/governing-council" element={<GoverningCouncil />} />
        <Route path="/strategicplan" element={<StrategicPlan />} />
        <Route path="/dpharm" element={<DPharm />} />
        <Route path="/bpharm" element={<BPharm />} />
        <Route path="/doctorpharm" element={<PharmD />} />
        <Route path="/mpharm" element={<MPharm />} />
        <Route path="/dop" element={<DepartmentOfPharmaceutics />} />
        <Route path="/doc" element={<DepartmentOfPharmaceuticalChemistry />} />
        <Route path="/dopharma" element={<DepartmentOfPharmacology />} />
        <Route path="/pharmacognosy" element={<DepartmentOfPharmacognosy />} />
        <Route path="/pharmacy" element={<DepartmentOfPharmacyPractice />} />
        <Route path="/curriculum-development" element={<CurriculumDevelopmentCouncil />} />
        <Route path="/national" element={<NationalConferences />} />
        <Route path="/about-iqac" element={<AboutIQAC />} />
        <Route path="/iqac-members" element={<IQACComposition />} />
        <Route path="/aishe" element={<AISHE />} />
        <Route path="/aishe/:year" element={<AISHE />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/stakeholder-feedback-forms" element={<StakeholderFeedback />} />
        <Route path="/action-taken" element={<ActionTaken />} />
        <Route path="/evidence-of-action-taken" element={<EvidenceOfActionTaken />} />
        <Route path="/analysis-of-feedback" element={<AnalysisOfFeedback />} />
        <Route path="/antidiscrimination" element={<AntiDiscrimination />} />
        <Route path="/antiragging" element={<AntiRagging />} />
        <Route path="/gender" element={<GenderSensitization />} />
        <Route path="/sc-st" element={<SCSTCommittee />} />
        <Route path="/internal_committee" element={<InternalComplaintsCommittee />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<SmartClassroom />} />

        {/* NAAC / SSR Criteria Routes */}
        <Route path="/criteria1" element={<Criteria1 />} />
        <Route path="/criteria2" element={<Criteria2 />} />
        <Route path="/criteria3" element={<Criteria3 />} />
        <Route path="/criteria4" element={<Criteria4 />} />
        <Route path="/criteria5" element={<Criteria5 />} />
        <Route path="/criteria6" element={<Criteria6 />} />
        <Route path="/criteria7" element={<Criteria7 />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/iic" element={<IIC />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/parambariyam" element={<Parambariyam />} />
        <Route path="/iyarkai" element={<Iyarkai />} />
        <Route path="/avathara" element={<Avathara />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/waste-management" element={<WasteManagement />} />
        <Route path="/food-court" element={<FoodCourt />} />
        <Route path="/library" element={<Library />} />

      </Routes>
    </Router>
  );
}

export default App;
