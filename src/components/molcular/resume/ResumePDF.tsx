import NormalButton from "components/atom/button/NormalButton";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePDF({ path }: { path: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(path);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={
          "https://resume-file-storage.s3.ap-northeast-2.amazonaws.com" + path
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pb-10 pt-5 flex justify-center items-center space-x-4">
        <NormalButton
          type="button"
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
          }}
        >
          이전페이지
        </NormalButton>
        <div className="text-lightBlack">
          현재 페이지 {pageNumber} / {numPages}
        </div>
        <NormalButton
          type="button"
          onClick={() => {
            if (numPages && pageNumber < numPages)
              setPageNumber(pageNumber + 1);
          }}
        >
          다음페이지
        </NormalButton>
      </div>
    </div>
  );
}
