import MainNavigation from "../components/MainNavigation";
import Wrapper from "../components/UI/Wrapper";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Wrapper>
      <MainNavigation />
      <main className="content">
        <Outlet />
      </main>
      </Wrapper>
  );
}
