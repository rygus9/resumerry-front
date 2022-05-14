import PostForm from "components/molcular/post/PostForm";
import { useParams } from "react-router-dom";
import { usePost } from "./hooks/usePost";
import usePostUpgrade from "./hooks/usePostUpgrade";

export default function PostUpdate() {
  const params = useParams();
  const { isLoading, mutate } = usePostUpgrade();
  const { data } = usePost(params.userId!, params.postId!);

  return <PostForm isLoading={isLoading} submitFunc={mutate} post={data} />;
}
