import Header from "pages/common/Header";
import LoginModal from "pages/common/LoginModal";
import PostList from "pages/post/PostList";
import PostTemplate from "pages/post/PostTemplate";
import Register from "pages/regist/Register";
import { Route, Routes } from "react-router-dom";
import { cls } from "util/utils";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import Post from "pages/post/Post";
import ResumeList from "pages/resume/ResumeList";
import ResumeTemplate from "pages/resume/ResumeTemplate";
import Resume from "pages/resume/Resume";

const wrapContent = (children: JSX.Element) => (
  <div
    className={cls(
      "max-w-[900px] m-auto mt-12 w-full px-5",
      "sm:w-4/5 sm:px-0 sm:mt-16"
    )}
  >
    {children}
  </div>
);

export default function App() {
  const open = useRecoilValue(openState);

  return (
    <div
      className={cls(
        "w-full min-h-screen bg-white overflow-x-hidden",
        open.loginOpen || open.postFilterOpen || open.resumeFilterOpen
          ? "h-screen overflow-hidden"
          : "h-fit"
      )}
    >
      <Header />
      <main className="w-full py-14">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/post" element={wrapContent(<PostList />)} />
          <Route path="/post/create" element={<PostTemplate />} />
          <Route path="/post/:userId/:postId" element={wrapContent(<Post />)} />
          <Route path="/resume" element={wrapContent(<ResumeList />)} />
          <Route path="/resume/create" element={<ResumeTemplate />} />
          <Route path="/resume/:userId/:resumeId" element={<Resume />} />
        </Routes>
      </main>
      {open.loginOpen && <LoginModal />}
    </div>
  );
}
