//TODO: Create custom spinner instead of stupid current library
//TODO: Header/footer

import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Layout from './Layout';
import Spinner from './views/Spinner';
import { useState, useEffect } from "react";
import teamData from './Assets/TeamInfo/teamData.json';

function App() {
  const [teams, setTeams] = useState(() => {
    const storedTeams = JSON.parse(localStorage.getItem("teams"));
    return storedTeams ? storedTeams : teamData;
  });

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);
  
  const [history, setHistory] = useState(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history"));
    return storedHistory ? storedHistory : [];
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home setTeams={setTeams} setHistory={setHistory} />} />
        <Route path="spinner" element={<Spinner teams={teams} setTeams={setTeams} history={history} setHistory={setHistory} />} />
      </Route>
    </Routes>
  );
}

export default App;
