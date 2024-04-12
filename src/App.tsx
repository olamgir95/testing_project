import NotFound from "components/NotFound";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
