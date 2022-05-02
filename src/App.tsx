import Header from 'pages/common/Header';
import LoginModal from 'pages/common/LoginModal';
import PostList from 'pages/PostList';
import PostTemplate from 'pages/PostTemplate';
import Register from 'pages/Register';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { cls } from 'service/utils';

export default function App() {
  const [openLogin, setOpenLogin] = useState(false);

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
          <Route path="/post" element={<PostList />} />
          <Route path="/post/create" element={<PostTemplate />} />
        </Routes>
      </main>
      {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
    </div>
  );
}
