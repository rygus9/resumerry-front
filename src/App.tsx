import Header from 'components/common/Header';
import LoginModal from 'components/common/LoginModal';
import Board from 'pages/Board';
import BoardTemplate from 'pages/BoardTemplate';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { cls } from 'service/utils';
import Register from './pages/Register';

export default function App() {
  const [openLogin, setOpenLogin] = useState(true);

  return (
    <div
      className={cls(
        'w-full min-h-screen bg-white overflow-x-hidden',
        openLogin ? 'h-screen overflow-hidden' : 'h-fit',
      )}
    >
      <Header setOpen={setOpenLogin} />
      <main className="w-full py-14">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/create" element={<BoardTemplate />} />
        </Routes>
      </main>
      {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
    </div>
  );
}
