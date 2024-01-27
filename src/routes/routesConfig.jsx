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
import ThemePage from "../pages/StudyPage/ThemePage/ThemePage";
import BooksPage from "../pages/BooksPage/BooksPage";
import BookPage from "../pages/BookPage/BookPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import MyBooksPage from "../pages/MyBooksPage/MyBooksPage";
import ConstructorPage from "../pages/ConstructorPage/ConstructorPage";
import MainPageBook from "../pages/MainPageBooks/MainPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";

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
  {
    path: staticLinks.themepage,
    element: <ThemePage></ThemePage>,
  },
  {
    path: staticLinks.mainbookpage,
    element: <MainPageBook></MainPageBook>,
  },
  {
    path: staticLinks.bookspage,
    element: <BooksPage></BooksPage>,
  },
  {
    path: staticLinks.bookpage,
    element: <BookPage></BookPage>,
  },
  {
    path: staticLinks.personalpage,
    element: <PersonalPage></PersonalPage>,
  },
  {
    path: staticLinks.mabooks,
    element: <MyBooksPage></MyBooksPage>,
  },
  {
    path: staticLinks.constuctor,
    element: <ConstructorPage></ConstructorPage>,
  },
  {
    path: staticLinks.portfoliopage,
    element: <PortfolioPage></PortfolioPage>
  }
];
