import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyTasks from './components/myTask';
import PullRequests from './components/pullRequest';
import MyDashBoard from './components/mydashboard';
import Header from './components/header';
import NotFound from './components/notfound';
import MyProject from './components/myProject';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/myTasks' element={<MyTasks />} />
          <Route exact path='/pullrequests' element={<PullRequests />} />
          <Route element={<NotFound />} />
          <Route path='/' element={<MyDashBoard />} />
          <Route exact path='/projects' element={<MyProject />} />
        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;
