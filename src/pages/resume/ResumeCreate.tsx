import ResumeForm from "components/molcular/resume/ResumeForm";
import useResumeRegist from "./hooks/useResumeRegist";

export default function ResumeCreate() {
  const { isLoading, mutate } = useResumeRegist();

  return <ResumeForm isLoading={isLoading} submitFunc={mutate}></ResumeForm>;
}
