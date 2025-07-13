import MainNavigation from "../components/MainNavigation";
import Wrapper from "../components/UI/Wrapper";

export default function Error() {
  return (
    <Wrapper>
      <MainNavigation />
      <main className="content">
        <h1>An error occured</h1>
        <p>Could not find this page.</p>
      </main>
    </Wrapper>
  );
}
