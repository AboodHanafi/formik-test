import "./App.css";
import { FormikFormDemo } from "./Components/formik1";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  return (
    <div className="container">
      <FormikFormDemo />
    </div>
  );
}

export default App;
