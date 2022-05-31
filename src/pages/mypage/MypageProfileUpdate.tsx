import { useParams } from "react-router-dom";
import { useProfile } from "./hooks/useMypageProfile";
import useProfileUpdate from "./hooks/useProfileUpdate";
import ProfileForm from "./ProfileForm";

export default function ProfileUpdate({
  goProfile,
}: {
  goProfile: () => void;
}) {
  const params = useParams();
  const { isLoading, mutate } = useProfileUpdate(goProfile);
  const { data } = useProfile(params.userId!);

  return (
    <ProfileForm isLoading={isLoading} submitFunc={mutate} profile={data!} />
  );
}
