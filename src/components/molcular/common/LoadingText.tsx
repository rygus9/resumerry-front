export default function LoadingText() {
  return (
    <div className="flex items-center space-x-2">
      <div className="border-2 border-lightGray border-t-deepPurple  my-10 w-5 h-5 rounded-full animate-spin"></div>
      <span>진행 중</span>
    </div>
  );
}
