"use client";
import DecryptedText from "@/components/containers/DecryptedText/DecryptedText";

export default function DownloadCV() {
  const handleDownload = () => {
    const cvUrl = "/resume.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen p-4 z-10">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="!w-full !h-auto bg-[#090909b6] rounded-xl border border-[#191919] p-16">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
                  <DecryptedText animateOn={"view"} text="Resume" />
                </h1>
              </div>

              <div className="w-full" onClick={handleDownload}>
                <button className="bg-[#0c0c0c] hover:bg-[#151515] border border-[#191919] rounded-xl px-8 py-4 text-neutral-200 font-medium transition-colors">
                  <DecryptedText speed={60} animateOn={"view"} text="Download" />
                </button>
              </div>

              <p className="text-sm text-neutral-400">
                <DecryptedText
                  speed={40}
                  animateOn={"view"}
                  text="Available in PDF format • Last updated 2025"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
