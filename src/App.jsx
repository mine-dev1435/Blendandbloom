import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BestSalonAcademyKolathur from "./pages/BestSalonAcademyKolathur";
import BestSalonAcademyVillivakkam from "./pages/BestSalonAcademyVillivakkam";
import BestSalonAcademyRedhills from "./pages/BestSalonAcademyRedhills";
import BestSalonAcademyAmbattur from "./pages/BestSalonAcademyAmbattur";
import BestSalonAcademyMathavaram from "./pages/BestSalonAcademyMathavaram";
import BestSalonAcademyKorattur from "./pages/BestSalonAcademyKorattur";
import BestSalonAcademyAnnaNagar from "./pages/BestSalonAcademyAnnaNagar";
import BestSalonAcademyPadi from "./pages/BestSalonAcademyPadi";
import BestSalonAcademyPerambur from "./pages/BestSalonAcademyPerambur";

import HairStylingKolathur from "./pages/HairStylingKolathur";
import HairStylingVillivakkam from "./pages/HairStylingVillivakkam";
import HairStylingRedhills from "./pages/HairStylingRedhills";
import HairStylingAmbattur from "./pages/HairStylingAmbattur";
import HairStylingMathavaram from "./pages/HairStylingMathavaram";
import HairStylingKorattur from "./pages/HairStylingKorattur";
import HairStylingAnnaNagar from "./pages/HairStylingAnnaNagar";
import HairStylingPadi from "./pages/HairStylingPadi";
import HairStylingPerambur from "./pages/HairStylingPerambur";

import HairExtensionKolathur from "./pages/HairExtensionKolathur";
import HairExtensionVillivakkam from "./pages/HairExtensionVillivakkam";
import HairExtensionRedhills from "./pages/HairExtensionRedhills";
import HairExtensionAmbattur from "./pages/HairExtensionAmbattur";
import HairExtensionMathavaram from "./pages/HairExtensionMathavaram";
import HairExtensionKorattur from "./pages/HairExtensionKorattur";
import HairExtensionAnnaNagar from "./pages/HairExtensionAnnaNagar";
import HairExtensionPadi from "./pages/HairExtensionPadi";
import HairExtensionPerambur from "./pages/HairExtensionPerambur";

import MakeupKolathur from "./pages/MakeupKolathur";
import MakeupVillivakkam from "./pages/MakeupVillivakkam";
import MakeupRedhills from "./pages/MakeupRedhills";
import MakeupAmbattur from "./pages/MakeupAmbattur";
import MakeupMathavaram from "./pages/MakeupMathavaram";
import MakeupKorattur from "./pages/MakeupKorattur";
import MakeupAnnaNagar from "./pages/MakeupAnnaNagar";
import MakeupPadi from "./pages/MakeupPadi";
import MakeupPerambur from "./pages/MakeupPerambur";

import SkinCareKolathur from "./pages/SkinCareKolathur";
import SkinCareVillivakkam from "./pages/SkinCareVillivakkam";
import SkinCareRedhills from "./pages/SkinCareRedhills";
import SkinCareAmbattur from "./pages/SkinCareAmbattur";
import SkinCareMathavaram from "./pages/SkinCareMathavaram";
import SkinCareKorattur from "./pages/SkinCareKorattur";
import SkinCareAnnaNagar from "./pages/SkinCareAnnaNagar";
import SkinCarePadi from "./pages/SkinCarePadi";
import SkinCarePerambur from "./pages/SkinCarePerambur";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/programs" element={<HomePage />} />
          <Route path="/team" element={<HomePage />} />
          <Route path="/testimonials" element={<HomePage />} />
          <Route path="/faq" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/best-salon-academy-in-kolathur-chennai" element={<BestSalonAcademyKolathur />} />
          <Route path="/best-salon-academy-in-villivakkam-chennai" element={<BestSalonAcademyVillivakkam />} />
          <Route path="/best-salon-academy-in-redhills-chennai" element={<BestSalonAcademyRedhills />} />
          <Route path="/best-salon-academy-in-ambattur-chennai" element={<BestSalonAcademyAmbattur />} />
          <Route path="/best-salon-academy-in-mathavaram-chennai" element={<BestSalonAcademyMathavaram />} />
          <Route path="/best-salon-academy-in-korattur-chennai" element={<BestSalonAcademyKorattur />} />
          <Route path="/best-salon-academy-in-anna-nagar-chennai" element={<BestSalonAcademyAnnaNagar />} />
          <Route path="/best-salon-academy-in-padi-chennai" element={<BestSalonAcademyPadi />} />
          <Route path="/best-salon-academy-in-perambur-chennai" element={<BestSalonAcademyPerambur />} />
          <Route path="/best-master-professional-hair-styling-in-kolathur-chennai" element={<HairStylingKolathur />} />
          <Route path="/best-master-professional-hair-styling-in-villivakkam-chennai" element={<HairStylingVillivakkam />} />
          <Route path="/best-master-professional-hair-styling-in-redhills-chennai" element={<HairStylingRedhills />} />
          <Route path="/best-master-professional-hair-styling-in-ambattur-chennai" element={<HairStylingAmbattur />} />
          <Route path="/best-master-professional-hair-styling-in-mathavaram-chennai" element={<HairStylingMathavaram />} />
          <Route path="/best-master-professional-hair-styling-in-korattur-chennai" element={<HairStylingKorattur />} />
          <Route path="/best-master-professional-hair-styling-in-anna-nagar-chennai" element={<HairStylingAnnaNagar />} />
          <Route path="/best-master-professional-hair-styling-in-padi-chennai" element={<HairStylingPadi />} />
          <Route path="/best-master-professional-hair-styling-in-perambur-chennai" element={<HairStylingPerambur />} />
          <Route path="/best-master-hair-extension-course-in-kolathur-chennai" element={<HairExtensionKolathur />} />
          <Route path="/best-master-hair-extension-course-in-villivakkam-chennai" element={<HairExtensionVillivakkam />} />
          <Route path="/best-master-hair-extension-course-in-redhills-chennai" element={<HairExtensionRedhills />} />
          <Route path="/best-master-hair-extension-course-in-ambattur-chennai" element={<HairExtensionAmbattur />} />
          <Route path="/best-master-hair-extension-course-in-mathavaram-chennai" element={<HairExtensionMathavaram />} />
          <Route path="/best-master-hair-extension-course-in-korattur-chennai" element={<HairExtensionKorattur />} />
          <Route path="/best-master-hair-extension-course-in-anna-nagar-chennai" element={<HairExtensionAnnaNagar />} />
          <Route path="/best-master-hair-extension-course-in-padi-chennai" element={<HairExtensionPadi />} />
          <Route path="/best-master-hair-extension-course-in-perambur-chennai" element={<HairExtensionPerambur />} />
          <Route path="/best-professional-makeup-course-in-kolathur-chennai" element={<MakeupKolathur />} />
          <Route path="/best-professional-makeup-course-in-villivakkam-chennai" element={<MakeupVillivakkam />} />
          <Route path="/best-professional-makeup-course-in-redhills-chennai" element={<MakeupRedhills />} />
          <Route path="/best-professional-makeup-course-in-ambattur-chennai" element={<MakeupAmbattur />} />
          <Route path="/best-professional-makeup-course-in-mathavaram-chennai" element={<MakeupMathavaram />} />
          <Route path="/best-professional-makeup-course-in-korattur-chennai" element={<MakeupKorattur />} />
          <Route path="/best-professional-makeup-course-in-anna-nagar-chennai" element={<MakeupAnnaNagar />} />
          <Route path="/best-professional-makeup-course-in-padi-chennai" element={<MakeupPadi />} />
          <Route path="/best-professional-makeup-course-in-perambur-chennai" element={<MakeupPerambur />} />
          <Route path="/best-professional-skin-care-course-in-kolathur-chennai" element={<SkinCareKolathur />} />
          <Route path="/best-professional-skin-care-course-in-villivakkam-chennai" element={<SkinCareVillivakkam />} />
          <Route path="/best-professional-skin-care-course-in-redhills-chennai" element={<SkinCareRedhills />} />
          <Route path="/best-professional-skin-care-course-in-ambattur-chennai" element={<SkinCareAmbattur />} />
          <Route path="/best-professional-skin-care-course-in-mathavaram-chennai" element={<SkinCareMathavaram />} />
          <Route path="/best-professional-skin-care-course-in-korattur-chennai" element={<SkinCareKorattur />} />
          <Route path="/best-professional-skin-care-course-in-anna-nagar-chennai" element={<SkinCareAnnaNagar />} />
          <Route path="/best-professional-skin-care-course-in-padi-chennai" element={<SkinCarePadi />} />
          <Route path="/best-professional-skin-care-course-in-perambur-chennai" element={<SkinCarePerambur />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
