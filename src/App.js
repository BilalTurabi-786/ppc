import './App.css';
import React from "react";
import './Samples.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';



import AboutComponent from './components/aboutUs/AboutComponent';
import OurExpert from './components/ourExpert/OurExpert';
import ServiceComponent from './components/services/ServiceComponent'
import SampleComponent from './components/samples/SampleComponent'
import PhilosophyComp from './components/services/Service_Components/philosophy_assignm/PhilosophyComp';
import NursingComp from './components/services/Service_Components/Nursing_assignm/NursingComp';
import MathComp from './components/services/Service_Components/Math_assignm/MathComp';
import AccountingComp from './components/services/Service_Components/Accounting_assignm/AccountingComp';
import BiologyComp from './components/services/Service_Components/Biology_assignm/BiologyComp';
import BusinessComp from './components/services/Service_Components/Business_assignm/BusinessComp';
import ChemistryComp from './components/services/Service_Components/Chemistry_assignm/ChemistryComp';
import ComputerComp from './components/services/Service_Components/Computer_assignm/ComputerComp';
import EconomicComp from './components/services/Service_Components/Economic_assignm/EconomicComp';
import EngineeringComp from './components/services/Service_Components/Engineering_assignm/EngineeringComp';
import EnglishComp from './components/services/Service_Components/English_assignm/EnglishComp';
import FinanceComp from './components/services/Service_Components/Finance_assignm/FinanceComp';
import GeographyComp from './components/services/Service_Components/Geography_assignm/GeographyComp';
import HistoryComp from './components/services/Service_Components/History_assignm/HistoryComp';
import ITComp from './components/services/Service_Components/IT_assignm/ITComp';
import LawComp from './components/services/Service_Components/Law_assignm/LawComp';
import LinguisticComp from './components/services/Service_Components/Liguistic_assignm/LinguisticComp';
import ManagementComp from './components/services/Service_Components/Managment_assignm/ManagementComp';
import MarketingComp from './components/services/Service_Components/Marketing_assignm/MarketingComp';
import PhysicsComp from './components/services/Service_Components/Physics_assignm/PhysicsComp';
import ProgrammingComp from './components/services/Service_Components/Programming_assignm/ProgrammingComp';
import PsychologyComp from './components/services/Service_Components/Psychology_assignm/PsychologyComp';
import SociologyComp from './components/services/Service_Components/Sociology_assignm/SociologyComp';
import StatisticsComp from './components/services/Service_Components/Statistics_assignm/StatisticsComp';
import ReviewComp from './components/Reviews/ReviewComp';
import WhatsappReviewComp from './components/Reviews/whatsapp_reviews/WhatsappReviewComp';
import PortfolioComp from './components/Portfolio/PortfolioComp';


  ////////////////////  Card and Content Components  /////////////////////


import AccountCardComp from './components/samples/sample_components/Accounting/account_card_comp/AccountCardComp.js';
import AccountContentComp1 from './components/samples/sample_components/Accounting/account_content_comp1/AccountContentComp1.js';
import AccountContentComp2 from './components/samples/sample_components/Accounting/account_content_comp2/AccountContentComp2.js';

import ArchitecCardComp from './components/samples/sample_components/Architecture/architec_card_comp/ArchitecCardComp.js';
import ArchitecContentComp1 from './components/samples/sample_components/Architecture/architec_content_comp1/ArchitecContentComp1.js';
import ArchitecContentComp2 from './components/samples/sample_components/Architecture/architec_content_comp2/ArchitecContentComp2.js';

import ArtsCardComp from './components/samples/sample_components/Arts/arts_card_comp/ArtsCardComp.js';
import ArtsContentComp1 from './components/samples/sample_components/Arts/arts_content_comp1/ArtsContentComp1.js';

import BiologyCardComp from './components/samples/sample_components/Biology/Biology_card_comp/BiologyCardComp.js'
import BiologyContentComp1 from'./components/samples/sample_components/Biology/Biology_content_comp1/BiologyContentComp1.js'
import  BiologyContentComp2 from './components/samples/sample_components/Biology/Biology_content_comp2/BiologyContentComp2.js'

import BusinessCardComp from './components/samples/sample_components/Business/Business_card_comp/BusinessCardComp.js'
import BusinessContentComp1 from './components/samples/sample_components/Business/Business_content_comp1/BusinessContentComp1.js'
import BusinessContentComp2 from './components/samples/sample_components/Business/Business_content_comp2/BusinessContentComp2.js'

import ChildcareCardComp from './components/samples/sample_components/Childcare/Childcare_card_comp/ChildcareCardComp.js'
import ChildcareContentComp1 from './components/samples/sample_components/Childcare/Childcare_content_comp1/ChildcareContentComp1.js'
import ChildcareContentComp2 from './components/samples/sample_components/Childcare/Childcare_content_comp2/ChildcareContentComp2.js'
import ChildcareContentComp3 from './components/samples/sample_components/Childcare/Childcare_content_comp3/ChildcareContentComp3.js'

import CommerceCardComp from './components/samples/sample_components/Commerce/Commerce_card_comp/CommerceCardComp.js'
import CommerceContentComp1 from './components/samples/sample_components/Commerce/Commerce_content_comp1/CommerceContentComp1.js'

import ComputerScienceCardComp from './components/samples/sample_components/Computer_Science/ComputerScience_card_comp/ComputerScienceCardComp.js'
import ComputerScienceContentComp1 from './components/samples/sample_components/Computer_Science/ComputerScience_content_comp1/ComputerScienceContentComp1.js'

import DesignCardComp from './components/samples/sample_components/Design/Design_card_comp/DesignCardComp.js'
import DesignContentComp1 from './components/samples/sample_components/Design/Design_content_comp1/DesignContentComp1.js'

import EconomicsCardComp from './components/samples/sample_components/Economics/Economics_card_comp/EconomicsCardComp.js'
import EconomicsContentComp1 from './components/samples/sample_components/Economics/Economics_content_comp1/EconomicsContentComp1.js'
import EconomicsContentComp2 from './components/samples/sample_components/Economics/Economics_content_comp2/EconomicsContentComp2.js'
import EconomicsContentComp3 from './components/samples/sample_components/Economics/Economics_content_comp3/EconomicsContentComp3.js'

import EducationCardComp from './components/samples/sample_components/Education/Education_card_comp/EducationCardComp.js'
import EducationContentComp1 from './components/samples/sample_components/Education/Education_content_comp1/EducationContentComp1.js'
import EducationContentComp2 from './components/samples/sample_components/Education/Education_content_comp2/EducationContentComp2.js'
import EducationContentComp3 from './components/samples/sample_components/Education/Education_content_comp3/EducationContentComp3.js'

import EmployeeRelationCardComp from './components/samples/sample_components/Employee_relations/EmployeeRelation_card_comp/EmployeeRelationCardComp.js'
import EmployeeRelationContentComp1 from './components/samples/sample_components/Employee_relations/EmployeeRelation_content_comp1/EmployeeRelationContentComp1.js'
import EmployeeRelationContentComp2 from './components/samples/sample_components/Employee_relations/EmployeeRelation_content_comp2/EmployeeRelationContentComp2.js'

import EngineeringCardComp from './components/samples/sample_components/Engineering/Engineering_card_comp/EngineeringCardComp.js'
import EngineeringContentComp1 from './components/samples/sample_components/Engineering/Engineering_content_comp1/EngineeringContentComp1.js'

import FashionCardComp from './components/samples/sample_components/Fashion/Fashion_card_comp/FashionCardComp.js'
import FashionContentComp1 from './components/samples/sample_components/Fashion/Fashion_content_comp1/FashionContentComp1.js'
import FashionContentComp2 from './components/samples/sample_components/Fashion/Fashion_content_comp2/FashionContentComp2.js'

import FinanceCardComp from './components/samples/sample_components/Finance/Finance_card_comp/FinanceCardComp.js'
import FinanceContentComp1 from './components/samples/sample_components/Finance/Finance_content_comp1/FinanceContentComp1.js'
import FinanceContentComp2 from "./components/samples/sample_components/Finance/Finance_content_comp2/FinanceContentComp2.js"
import FinanceContentComp3 from './components/samples/sample_components/Finance/Finance_content_comp3/FinanceContentComp3.js'

import FoodSafetyManageCardComp from './components/samples/sample_components/Food_safety_manage/FoodSafetyManage_card_comp/FoodSafetyManageCardComp.js'
import FoodSafetyManageContentComp1 from './components/samples/sample_components/Food_safety_manage/FoodSafetyManage_content_comp1/FoodSafetyManageContentComp1.js'

import GeneralStudiesCardComp from './components/samples/sample_components/General_Studies/GeneralStudies_card_comp/GeneralStudiesCardComp.js'
import GeneralStudiesContentComp1 from './components/samples/sample_components/General_Studies/GeneralStudies_content_comp1/GeneralStudiesContentComp1.js'
import GeneralStudiesContentComp2 from './components/samples/sample_components/General_Studies/GeneralStudies_content_comp2/GeneralStudiesContentComp2.js'
import GeneralStudiesContentComp3 from './components/samples/sample_components/General_Studies/GeneralStudies_content_comp3/GeneralStudiesContentComp3.js'


import GeographyCardComp from './components/samples/sample_components/Geography/Geography_card_comp/GeographyCardComp.js'
import GeographyContentComp1 from './components/samples/sample_components/Geography/Geography_content_comp1/GeographyContentComp1.js'

import HealthCardComp from './components/samples/sample_components/Health/Health_card_comp/HealthCardComp.js'
import HealthContentComp1 from './components/samples/sample_components/Health/Health_content_comp1/HealthContentComp1.js'
import HealthContentComp2 from './components/samples/sample_components/Health/Health_content_comp2/HealthContentComp2.js'
import HealthContentComp3 from './components/samples/sample_components/Health/Health_content_comp3/HealthContentComp3.js'

import HealthandSocialCareCardComp from './components/samples/sample_components/Health&Social_care/HealthSocialCare_card_comp/HealthandSocialCareCardComp.js'
import HealthandSocialCareContentComp1 from './components/samples/sample_components/Health&Social_care/HealthSocialCare_content_comp1/HealthandSocialCareContentComp1.js'
import HealthandSocialCareContentComp2 from './components/samples/sample_components/Health&Social_care/HealthSocialCare_content_comp2/HealthandSocialCareContentComp2.js'
import HealthandSocialCareContentComp3 from './components/samples/sample_components/Health&Social_care/HealthSocialCare_content_comp3/HealthandSocialCareContentComp3.js'

import HumanRightCardComp from './components/samples/sample_components/Human_Right/HumanRight_card_comp/HumanRightCardComp.js'
import HumanRightContentComp1 from './components/samples/sample_components/Human_Right/HumanRight_content_comp1/HumanRightContentComp1.js'
import HumanRightContentComp2 from './components/samples/sample_components/Human_Right/HumanRight_content_comp2/HumanRightContentComp2.js'

import IndustrialRelationCardComp from './components/samples/sample_components/Industrial_Relation/IndustrialRelation_card_comp/IndustrialRelationCardComp.js'
import IndustrialRelationContentComp1 from './components/samples/sample_components/Industrial_Relation/IndustrialRelation_content_comp1/IndustrialRelationContentComp1.js'

import InformationSystemCardComp from './components/samples/sample_components/Information_system/InformationSystem_card_comp/InformationSystemCardComp.js'
import InformationSystemContentComp1 from './components/samples/sample_components/Information_system/InformationSystem_content_comp1/InformationSystemContentComp1.js'
import InformationSystemContentComp2 from './components/samples/sample_components/Information_system/InformationSystem_content_comp2/InformationSystemContentComp2.js'

import LanguagesCardComp from './components/samples/sample_components/Languages/Languages_card_comp/LanguagesCardComp.js'
import LanguagesContentComp1 from './components/samples/sample_components/Languages/Languages_content_comp1/LanguagesContentComp1.js'
import LanguagesContentComp2 from './components/samples/sample_components/Languages/Languages_content_comp2/LanguagesContentComp2.js'

import LawCardComp from './components/samples/sample_components/Law/Law_card_comp/LawCardComp.js'
import LawContentComp1 from './components/samples/sample_components/Law/Law_content_comp1/LawContentComp1.js'
import LawContentComp2 from './components/samples/sample_components/Law/Law_content_comp2/LawContentComp2.js'
import LawContentComp3 from './components/samples/sample_components/Law/Law_content_comp3/LawContentComp3.js'

import LeadershipCardComp from './components/samples/sample_components/Leadership/Leadership_card_comp/LeadershipCardComp.js'
import LeadershipContentComp1 from './components/samples/sample_components/Leadership/Leadership_content_comp1/LeadershipContentComp1.js'
import LeadershipContentComp2 from './components/samples/sample_components/Leadership/Leadership_content_comp2/LeadershipContentComp2.js'

import ManagementCardComp from './components/samples/sample_components/Management/Management_card_comp/ManagementCardComp.js'
import ManagementContentComp1 from './components/samples/sample_components/Management/Management_content_comp1/ManagementContentComp1.js'
import ManagementContentComp2 from './components/samples/sample_components/Management/Management_content_comp2/ManagementContentComp2.js'

import ManagingPeopleCareersCardComp from './components/samples/sample_components/ManagingPeople&careers/ManagingPeopleCareers_card_comp/ManagingPeopleCareersCardComp.js'
import ManagingPeopleCareersContentComp1 from './components/samples/sample_components/ManagingPeople&careers/ManagingPeopleCareers_content_comp1/ManagingPeopleCareersContentComp1.js'

import MathematicsCardComp from './components/samples/sample_components/Mathematics/Mathematics_card_comp/MathematicsCardComp.js'
import MathematicsContentComp1 from './components/samples/sample_components/Mathematics/Mathematics_content_comp1/MathematicsContentComp1.js'

import NetworkingCardComp from './components/samples/sample_components/Networking/Networking_card_comp/NetworkingCardComp.js'

import NursingCardComp from './components/samples/sample_components/Nursing/Nursing_card_comp/NursingCardComp.js'
import NursingContentComp1 from './components/samples/sample_components/Nursing/Nursing_content_comp1/NursingContentComp1.js'
import NursingContentComp2 from './components/samples/sample_components/Nursing/Nursing_content_comp2/NursingContentComp2.js'
import NursingContentComp3 from "./components/samples/sample_components/Nursing/Nursing_content_comp3/NursingContentComp3.js"

import Organiz_behaviourCardComp from "./components/samples/sample_components/Organizational_behaviour/Organiz_behaviour_card_comp/Organiz_behaviourCardComp.js"
import Organiz_behaviourContentComp1 from "./components/samples/sample_components/Organizational_behaviour/Organiz_behaviour_content_comp1/Organiz_behaviourContentComp1.js"
import Organiz_behaviourContentComp2 from "./components/samples/sample_components/Organizational_behaviour/Organiz_behaviour_content_comp2/Organiz_behaviourContentComp2.js"
import Organiz_behaviourContentComp3 from './components/samples/sample_components/Organizational_behaviour/Organiz_behaviour_content_comp3/Organiz_behaviourContentComp3.js'


import PersonalProfessionalDevCardComp from './components/samples/sample_components/Personal&professional_development/PersonalProfessionalDev_card_comp/PersonalProfessionalDevCardComp.js'
import PersonalProfessionalDevContentComp1 from './components/samples/sample_components/Personal&professional_development/PersonalProfessionalDev_content_comp1/PersonalProfessionalDevContentComp1.js'

import PhilosophyCardComp from './components/samples/sample_components/Philosophy/Philosophy_card_comp/PhilosophyCardComp.js'
import PhilosophyContentComp1 from './components/samples/sample_components/Philosophy/Philosophy_content_comp1/PhilosophyContentComp1.js'

import PlanningforGrowthCardComp from './components/samples/sample_components/Planning_for_growth/PlanningforGrowth_card_comp/PlanningforGrowthCardComp.js'
import PlanningforGrowthContentComp1 from "./components/samples/sample_components/Planning_for_growth/PlanningforGrowth_content_comp1/PlanningforGrowthContentComp1.js"

import ReligionCardComp from './components/samples/sample_components/Religion/Religion_card_comp/ReligionCardComp.js'
import ReligionContentComp1 from './components/samples/sample_components/Religion/Religion_content_comp1/ReligionContentComp1.js'

import SocialMediaCardComp from './components/samples/sample_components/Social_media/SocialMedia_card_comp/SocialMediaCardComp.js'
import SocialMediaContentComp1 from './components/samples/sample_components/Social_media/SocialMedia_content_comp1/SocialMediaContentComp1.js'
import SocialMediaContentComp2 from './components/samples/sample_components/Social_media/SocialMedia_content_comp2/SocialMediaContentComp2.js'

import SocialPolicyCardComp from './components/samples/sample_components/Social_policy/SocialPolicy_card_comp/SocialPolicyCardComp.js'
import SocialPolicyContentComp1 from "./components/samples/sample_components/Social_policy/SocialPolicy_content_comp1/SocialPolicyContentComp1.js"
import SocialPolicyContentComp2 from './components/samples/sample_components/Social_policy/SocialPolicy_content_comp2/SocialPolicyContentComp2.js'

import SociologyCardComp from './components/samples/sample_components/sociology/sociology_card_comp/SociologyCardComp.js'
import SociologyContentComp1 from './components/samples/sample_components/sociology/sociology_content_comp1/SociologyContentComp1.js'
import SociologyContentComp2 from "./components/samples/sample_components/sociology/sociology_content_comp2/SociologyContentComp2.js"
import SociologyContentComp3 from "./components/samples/sample_components/sociology/sociology_content_comp3/SociologyContentComp3.js"

import TeachingCardComp from "./components/samples/sample_components/Teaching/Teaching_card_comp/TeachingCardComp.js"
import TeachingContentComp1 from './components/samples/sample_components/Teaching/Teaching_content_comp1/TeachingContentComp1.js'

import TheologyCardComp from "./components/samples/sample_components/theology/theology_card_comp/TheologyCardComp.js"
import TheologyContentComp1 from "./components/samples/sample_components/theology/theology_content_comp1/TheologyContentComp1.js"
import TheologyContentComp2 from "./components/samples/sample_components/theology/theology_content_comp2/TheologyContentComp2.js"

import TourismCardComp from './components/samples/sample_components/Tourism/Tourism_card_comp/TourismCardComp.js'
import TourismContentComp1 from "./components/samples/sample_components/Tourism/Tourism_content_comp1/TourismContentComp1.js"
import TourismContentComp2 from "./components/samples/sample_components/Tourism/Tourism_content_comp2/TourismContentComp2.js"
import TourismContentComp3 from './components/samples/sample_components/Tourism/Tourism_content_comp3/TourismContentComp3.js'

import UnderstandSelfOthersCardComp from "./components/samples/sample_components/Understanding_self&Others/UnderstandSelfOthers_card_comp/UnderstandSelfOthersCardComp.js"
import UnderstandSelfOthersContentComp1 from './components/samples/sample_components/Understanding_self&Others/UnderstandSelfOthers_content_comp1/UnderstandSelfOthersContentComp1.js'

import FAQComp from './components/FAQs/FAQComp'; 
import ScrollToTop from './components/ScrollToTop ';

import { Component } from 'react';



export default function App() {
  return (
    <>
       
      <Router>
           <ScrollToTop/>
            
       <Switch>

            {/* Assignment Components */}
          
          <Route exact path='/'  component={ServiceComponent} />
          <Route exact path='/service'  component={ServiceComponent} />
          <Route exact path='/about' component={AboutComponent} />
          <Route exact path='/ourexpert' component={OurExpert} />
          <Route exact path='/samples' component={SampleComponent} />

          <Route path='/statistics' component={StatisticsComp} />
          <Route path='/sociology' component={SociologyComp} />
          <Route path='/psychology' component={PsychologyComp} />
          <Route path='/PhysicsComp' component={PhysicsComp} />
          <Route path='/ProgrammingComp' component={ProgrammingComp} />
          <Route path='/MarketingComp' component={MarketingComp} />
          <Route path='/ManagementComp' component={ManagementComp} />
          <Route path='/LinguisticComp' component={LinguisticComp} />
          <Route path='/LawComp' component={LawComp} />
          <Route path='/ITComp' component={ITComp} />
          <Route path='/HistoryComp' component={HistoryComp} />

          <Route path='/GeographyComp' component={GeographyComp} />
          <Route path='/FinanceComp' component={FinanceComp} />
          <Route path='/PhilosophyComp' component={PhilosophyComp} />
          <Route path='/NursingComp' component={NursingComp} />
          <Route path='/MathComp' component={MathComp} />
          <Route path='/AccountingComp' component={AccountingComp} />

          <Route path='/BiologyComp' component={BiologyComp} />
          <Route path='/BusinessComp' component={BusinessComp} />
          <Route path='/ChemistryComp' component={ChemistryComp} />
          <Route path='/ComputerComp' component={ComputerComp} />
          <Route path='/EconomicComp' component={EconomicComp} />
          <Route path='/EngineeringComp' component={EngineeringComp} />
          <Route path='/EnglishComp' component={EnglishComp} />
          <Route path='/ReviewComp' component={ReviewComp} />
          <Route path='/whatsapp_reviews' component={WhatsappReviewComp} />
          <Route path='/PortfolioComp' component={PortfolioComp} />
          <Route path='/FAQComp' component={FAQComp} />
          
        {/* Card and Content Components */}

          <Route path='/AccountCardComp' component={AccountCardComp} />
          <Route path='/AccountContentComp1' component={AccountContentComp1} />
          <Route path='/AccountContentComp2' component={AccountContentComp2} />
          <Route path='/ArchitecCardComp' component={ArchitecCardComp} />
          <Route path='/ArchitecContentComp1' component={ArchitecContentComp1} />
          <Route path='/ArchitecContentComp2' component={ArchitecContentComp2} />
          <Route path='/ArtsCardComp' component={ArtsCardComp} />
          <Route path='/ArtsContentComp1' component={ArtsContentComp1} />
          <Route path='/BiologyCardComp' component={BiologyCardComp} />
          <Route path='/BiologyContentComp1' component={BiologyContentComp1} />
          <Route path='/BiologyContentComp2' component={BiologyContentComp2} />
          <Route path='/BusinessCardComp' component={BusinessCardComp} />
          <Route path='/BusinessContentComp1' component={BusinessContentComp1} />
          <Route path='/BusinessContentComp2' component={BusinessContentComp2} />
          <Route path='/ChildcareCardComp' component={ChildcareCardComp} />
          <Route path='/ChildcareContentComp1' component={ChildcareContentComp1} />
          <Route path='/ChildcareContentComp2' component={ChildcareContentComp2} />
          <Route path='/ChildcareContentComp3' component={ChildcareContentComp3} />
          <Route path='/CommerceCardComp' component={CommerceCardComp} />
          <Route path='/CommerceContentComp1' component={CommerceContentComp1} />
          <Route path='/ComputerScienceCardComp' component={ComputerScienceCardComp} />
          <Route path='/ComputerScienceContentComp1' component={ComputerScienceContentComp1} />
          <Route path='/DesignCardComp' component={DesignCardComp} />
          <Route path='/DesignContentComp1' component={DesignContentComp1} />
          <Route path='/EconomicsCardComp' component={EconomicsCardComp} />
          <Route path='/EconomicsContentComp1' component={EconomicsContentComp1} />
          <Route path='/EconomicsContentComp2' component={EconomicsContentComp2} />
          <Route path='/EconomicsContentComp3' component={EconomicsContentComp3} />
          <Route path='/EducationCardComp' component={EducationCardComp} />
          <Route path='/EducationContentComp1' component={EducationContentComp1} />
          <Route path='/EducationContentComp2' component={EducationContentComp2} />
          <Route path='/EducationContentComp3' component={EducationContentComp3} />

          <Route path='/EmployeeRelationCardComp' component={EmployeeRelationCardComp} />
          <Route path='/EmployeeRelationContentComp1' component={EmployeeRelationContentComp1} />
          <Route path='/EmployeeRelationContentComp2' component={EmployeeRelationContentComp2} />
          <Route path='/EngineeringCardComp' component={EngineeringCardComp} />
          <Route path='/EngineeringContentComp1' component={EngineeringContentComp1} />
          <Route path='/FashionCardComp' component={FashionCardComp} />
          <Route path='/FashionContentComp1' component={FashionContentComp1} />
          <Route path='/FashionContentComp2' component={FashionContentComp2} />
          <Route path='/FinanceCardComp' component={FinanceCardComp} />
          <Route path='/FinanceContentComp1' component={FinanceContentComp1} />
          <Route path='/FinanceContentComp2' component={FinanceContentComp2} />
          <Route path='/FinanceContentComp3' component={FinanceContentComp3} />
          <Route path='/FoodSafetyManageCardComp' component={FoodSafetyManageCardComp} />
          <Route path='/FoodSafetyManageContentComp1' component={FoodSafetyManageContentComp1} />
          <Route path='/GeneralStudiesCardComp' component={GeneralStudiesCardComp} />
          <Route path='/GeneralStudiesContentComp1' component={GeneralStudiesContentComp1} />
          <Route path='/GeneralStudiesContentComp2' component={GeneralStudiesContentComp2} />
          <Route path='/GeneralStudiesContentComp3' component={GeneralStudiesContentComp3} />

          <Route path='/GeographyCardComp' component={GeographyCardComp} />
          <Route path='/GeographyContentComp1' component={GeographyContentComp1} />
          <Route path='/HealthCardComp' component={HealthCardComp} />
          <Route path='/HealthContentComp1' component={HealthContentComp1} />
          <Route path='/HealthContentComp2' component={HealthContentComp2} />
          <Route path='/HealthContentComp3' component={HealthContentComp3} />
          <Route path='/HealthandSocialCareCardComp' component={HealthandSocialCareCardComp} />
          <Route path='/HealthandSocialCareContentComp1' component={HealthandSocialCareContentComp1} />
          <Route path='/HealthandSocialCareContentComp2' component={HealthandSocialCareContentComp2} />
          <Route path='/HealthandSocialCareContentComp3' component={HealthandSocialCareContentComp3} />

          <Route path='/HumanRightCardComp' component={HumanRightCardComp} />
          <Route path='/HumanRightContentComp1' component={HumanRightContentComp1} />
          <Route path='/HumanRightContentComp2' component={HumanRightContentComp2} />
          <Route path='/IndustrialRelationCardComp' component={IndustrialRelationCardComp} />
          <Route path='/IndustrialRelationContentComp1' component={IndustrialRelationContentComp1} />
          <Route path='/InformationSystemCardComp' component={InformationSystemCardComp} />
          <Route path='/InformationSystemContentComp1' component={InformationSystemContentComp1} />
          <Route path='/InformationSystemContentComp2' component={InformationSystemContentComp2} />
          <Route path='/LanguagesCardComp' component={LanguagesCardComp} />
          <Route path='/LanguagesContentComp1' component={LanguagesContentComp1} />
          <Route path='/LanguagesContentComp2' component={LanguagesContentComp2} />
          <Route path='/LawCardComp' component={LawCardComp} />
          <Route path='/LawContentComp1' component={LawContentComp1} />
          <Route path='/LawContentComp2' component={LawContentComp2} />
          <Route path='/LawContentComp3' component={LawContentComp3} />
          <Route path='/LeadershipCardComp' component={LeadershipCardComp} />
          <Route path='/LeadershipContentComp1' component={LeadershipContentComp1} />
          <Route path='/LeadershipContentComp2' component={LeadershipContentComp2} />
          <Route path='/ManagementCardComp' component={ManagementCardComp} />
          <Route path='/ManagementContentComp1' component={ManagementContentComp1} />
          <Route path='/ManagementContentComp2' component={ManagementContentComp2} />
          <Route path='/ManagingPeopleCareersCardComp' component={ManagingPeopleCareersCardComp} />
          <Route path='/ManagingPeopleCareersContentComp1' component={ManagingPeopleCareersContentComp1} />
          <Route path='/MathematicsCardComp' component={MathematicsCardComp} />
          <Route path='/MathematicsContentComp1' component={MathematicsContentComp1} />
          <Route path='/NetworkingCardComp' component={NetworkingCardComp} />
          <Route path='/NursingCardComp' component={NursingCardComp} />
          <Route path='/NursingContentComp1' component={NursingContentComp1} />
          <Route path='/NursingContentComp2' component={NursingContentComp2} />
          <Route path='/NursingContentComp3' component={NursingContentComp3} />
          <Route path='/Organiz_behaviourCardComp' component={Organiz_behaviourCardComp} />
          <Route path='/Organiz_behaviourContentComp1' component={Organiz_behaviourContentComp1} />
          <Route path='/Organiz_behaviourContentComp2' component={Organiz_behaviourContentComp2} />
          <Route path='/Organiz_behaviourContentComp3' component={Organiz_behaviourContentComp3} />
          <Route path='/PersonalProfessionalDevCardComp' component={PersonalProfessionalDevCardComp} />
          <Route path='/PersonalProfessionalDevContentComp1' component={PersonalProfessionalDevContentComp1} />
          <Route path='/PhilosophyCardComp' component={PhilosophyCardComp} />
          <Route path='/PhilosophyContentComp1' component={PhilosophyContentComp1} />
          <Route path='/PlanningforGrowthCardComp' component={PlanningforGrowthCardComp} />
          <Route path='/PlanningforGrowthContentComp1' component={PlanningforGrowthContentComp1} />
          <Route path='/ReligionCardComp' component={ReligionCardComp} />
          <Route path='/ReligionContentComp1' component={ReligionContentComp1} />
          <Route path='/SocialMediaCardComp' component={SocialMediaCardComp} />
          <Route path='/SocialMediaContentComp1' component={SocialMediaContentComp1} />
          <Route path='/SocialMediaContentComp2' component={SocialMediaContentComp2} />
          <Route path='/SocialPolicyCardComp' component={SocialPolicyCardComp} />
          <Route path='/SocialPolicyContentComp1' component={SocialPolicyContentComp1} />
          <Route path='/SocialPolicyContentComp2' component={SocialPolicyContentComp2} />
          <Route path='/SociologyCardComp' component={SociologyCardComp} />
          <Route path='/SociologyContentComp1' component={SociologyContentComp1} />
          <Route path='/SociologyContentComp2' component={SociologyContentComp2} />
          <Route path='/SociologyContentComp3' component={SociologyContentComp3} />

          <Route path='/TeachingCardComp' component={TeachingCardComp} />
          <Route path='/TeachingContentComp1' component={TeachingContentComp1} />
          <Route path='/TheologyCardComp' component={TheologyCardComp} />
          <Route path='/TheologyContentComp1' component={TheologyContentComp1} />
          <Route path='/TheologyContentComp2' component={TheologyContentComp2} />
          <Route path='/TourismCardComp' component={TourismCardComp} />
          <Route path='/TourismContentComp1' component={TourismContentComp1} />
          <Route path='/TourismContentComp2' component={TourismContentComp2} />
          <Route path='/TourismContentComp3' component={TourismContentComp3} />
          <Route path='/UnderstandSelfOthersCardComp' component={UnderstandSelfOthersCardComp} />
          <Route path='/UnderstandSelfOthersContentComp1' component={UnderstandSelfOthersContentComp1} />
         

          
        </Switch>
      </Router>
     
      
      
    </>
    
  );
}


