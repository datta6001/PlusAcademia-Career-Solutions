import "./components/styles.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";
import Home from "./components/content/Home";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Feedbacks from "./components/feedback/Feedbacks";

function App() {
  // const [content, setContent] = useState(<Home />);
  // const navigate = useNavigate();
  return (
    <>
      <Router>
        <NavBar />
        <Content>
          <Routes>
            <Route path="*" element={<Navigate to={"/"} />}></Route>
            <Route path="/" Component={Home}></Route>
            <Route path="/courses" Component={Courses}></Route>
            <Route path="/feedbacks" Component={Feedbacks}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/about" Component={About}></Route>
          </Routes>
        </Content>
        <Footer />
      </Router>
    </>
  );
}

export default App;
