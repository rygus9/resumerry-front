import Header from "pages/common/Header";
import LoginModal from "pages/common/LoginModal";
import PostList from "pages/post/PostList";
import PostCreate from "pages/post/PostCreate";
import Register from "pages/regist/Register";
import { Route, Routes } from "react-router-dom";
import { cls } from "util/utils";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import Post from "pages/post/Post";
import ResumeList from "pages/resume/ResumeList";
import Resume from "pages/resume/Resume";
import PostUpdate from "pages/post/PostUpdate";
import ResumeCreate from "pages/resume/ResumeCreate";
import ResumeUpdate from "pages/resume/ResumeUpdate";
import Mainpage from "pages/MainPage";
import Mypage from "pages/mypage/MyPage";

export default function App() {
  const open = useRecoilValue(openState);

  return (
    <div className={cls("w-full min-h-screen bg-white overflow-x-hidden")}>
      <Header />
      <main className="w-full pt-14">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/post/create" element={<PostCreate />} />
          <Route path="/post/:userId/:postId" element={<Post />} />
          <Route path="/post/:userId/:postId/update" element={<PostUpdate />} />
          <Route path="/resume" element={<ResumeList />} />
          <Route path="/resume/create" element={<ResumeCreate />} />
          <Route path="/resume/:userId/:resumeId" element={<Resume />} />
          <Route
            path="/resume/:userId/:resumeId/update"
            element={<ResumeUpdate />}
          />
          <Route path="/mypage/:userId" element={<Mypage />} />
        </Routes>
      </main>
      {open.loginOpen && <LoginModal />}
    </div>
  );
}
