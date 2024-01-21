import { staticLinks } from "../config/routingsLinks";
import MainPage from "../pages/MainPage/MainPage";

import СommandmentPage from "../pages/СommandmentPage/СommandmentPage";
import FinancePage from "../pages/FinancePage/FinancePage";
import KeysPage from "../pages/KeysPage/KeysPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MailPage from "../pages/MailPage/MailPage";
import PlanetPage from "../pages/PlanetPage/PlanetPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import MainStudyPage from "../pages/StudyPage/MainStudyPage";
import StudyPage from "../pages/StudyPage/StudyPage";
import VerdictPage from "../pages/VerdictPage/VerdictPage";
import VotesPage from "../pages/VotesPage/VotesPage";
import { WorkPage } from "../pages/WorkPage/WorkPage";
import StudyPlanPage from "../pages/StudyPage/StudyPlanPage";

export const publicRoutes = [
  {
    path: staticLinks.main,
    element: <MainPage></MainPage>,
  },
  {
    path: staticLinks.commandment,
    element: <СommandmentPage></СommandmentPage>,
  },
  {
    path: staticLinks.finance,
    element: <FinancePage></FinancePage>,
  },
  {
    path: staticLinks.keys,
    element: <KeysPage></KeysPage>,
  },
  {
    path: staticLinks.login,
    element: <LoginPage></LoginPage>,
  },
  {
    path: staticLinks.mail,
    element: <MailPage></MailPage>,
  },
  {
    path: staticLinks.planet,
    element: <PlanetPage></PlanetPage>,
  },
  {
    path: staticLinks.profile,
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: staticLinks.register,
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: staticLinks.study,
    element: <MainStudyPage></MainStudyPage>,
  },
  {
    path: staticLinks.verdict,
    element: <VerdictPage></VerdictPage>,
  },
  {
    path: staticLinks.votes,
    element: <VotesPage></VotesPage>,
  },
  {
    path: staticLinks.work,
    element: <WorkPage></WorkPage>,
  },
  {
    path: staticLinks.studylist,
    element: <StudyPage></StudyPage>,
  },
  {
    path: staticLinks.studypage,
    element: <StudyPlanPage></StudyPlanPage>,
  },
];
