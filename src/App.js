import { Blog } from "./Blog/Blog";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
