export default function LoadingUI() {
  return (
    <div className="w-full text-center">
      <h3 className="text-deepGray text-3xl">로딩 중</h3>
      <div className="flex items-center justify-center">
        <div className="border-4 border-lightGray border-t-lightPurple mt-4 w-16 h-16 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
