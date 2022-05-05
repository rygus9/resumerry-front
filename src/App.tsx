import Header from 'pages/common/Header';
import LoginModal from 'pages/common/LoginModal';
import PostList from 'pages/PostList';
import PostTemplate from 'pages/PostTemplate';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import { cls } from 'service/utils';
import { useRecoilValue } from 'recoil';
import { openState } from 'recoil/openState';
import Post from 'pages/Post';

const wrapContent = (children: JSX.Element) => (
  <div className="max-w-[900px] m-auto mt-16 w-4/5">{children}</div>
);

export default function App() {
  const open = useRecoilValue(openState);

  return (
    <div
      className={cls(
        'w-full min-h-screen bg-white overflow-x-hidden',
        open.loginOpen || open.postFilterOpen || open.resumeFilterOpen
          ? 'h-screen overflow-hidden'
          : 'h-fit',
      )}
    >
      <Header />
      <main className="w-full py-14">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/post/create" element={<PostTemplate />} />
          <Route path="/post" element={wrapContent(<PostList />)} />
          <Route
            path="/post/:userid/:memberId"
            element={wrapContent(<Post />)}
          />
        </Routes>
      </main>
      {open.loginOpen && <LoginModal />}
    </div>
  );
}
