import { cls } from "util/utils";
import { useParams } from "react-router-dom";
import ProfileUpdate from "./MypageProfileUpdate";
import MypageProfile from "./MypageProfile";
import Normalbutton from "components/atom/button/NormalButton";
import { useState } from "react";

export default function MypageProfileContainer() {
  const [onFix, setOnFix] = useState(true);
  return (
    <>
      {onFix ? (
        <div>
          <MypageProfile />
          <div className="flex justify-center mb-6">
            <Normalbutton
              size="md"
              color="normal"
              children={"수정하기"}
              onClick={() => {
                setOnFix(false);
              }}
            ></Normalbutton>
          </div>
        </div>
      ) : (
        <div>
          <ProfileUpdate
            goProfile={() => {
              setOnFix(true);
            }}
          />
          <div className="flex justify-center mb-6">
            <Normalbutton
              size="md"
              color="normal"
              children={"내프로필 보기"}
              onClick={() => {
                setOnFix(true);
              }}
            ></Normalbutton>
          </div>
        </div>
      )}
    </>
  );
}
