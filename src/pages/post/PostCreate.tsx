import PostForm from "components/molcular/post/PostForm";
import usePostRegist from "./hooks/usePostRegist";

export default function PostCreate() {
  const { isLoading, mutate } = usePostRegist();

  return <PostForm isLoading={isLoading} submitFunc={mutate} />;
}
