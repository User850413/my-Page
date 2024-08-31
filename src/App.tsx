import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Projects from "./pages/projects";
import Layout from "./layout/Layout";
import Contact from "./pages/connections";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connections" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
