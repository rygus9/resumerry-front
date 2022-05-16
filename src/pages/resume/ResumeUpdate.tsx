import ResumeForm from "components/molcular/resume/ResumeForm";
import { useParams } from "react-router-dom";
import { useResume } from "./hooks/useResume";
import useResumeUpdate from "./hooks/useResumeUpdate";

export default function ResumeUpdate() {
  const params = useParams();
  const { isLoading, mutate } = useResumeUpdate();
  const { data } = useResume(params.userId!, params.resumeId!);

  return (
    <ResumeForm isLoading={isLoading} submitFunc={mutate} resume={data!} />
  );
}
