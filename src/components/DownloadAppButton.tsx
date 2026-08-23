import { cn } from "@/lib/utils";

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-36.8-2.8-77 21.3-91.7 21.3-15.6 0-51.2-20.3-79.2-20.3C56.7 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 62 122.3 113.3 120.8 26.8-.6 45.8-19 80.7-19 33.9 0 51.5 19 81.4 19 51.7-.7 96.2-78.5 108.3-115.3-69.3-32.7-83.4-95.8-83.4-91.5zM267 96.5c25.8-30.6 22.7-58.5 21.7-68.5-21.8 1.3-47 14.9-61.4 31.7-15.8 18-25.1 40.3-23.1 65.1 23.6 1.8 45.2-10.3 62.8-28.3z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 512 512" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60-34.1c18-14.3 18-46.5-1.1-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const DownloadAppButton = ({ className }: { className?: string }) => (
  <div className={cn("relative inline-flex flex-col items-center", className)}>
    <div className="absolute -top-2 right-4 z-10 flex flex-col items-center">
      <span className="inline-flex items-center rounded bg-primary px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-primary-foreground shadow-sm">
        Coming soon
      </span>
      <div className="h-0 w-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-primary" />
    </div>
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 h-12 text-sm font-semibold text-[#0D0B1A] shadow-lg cursor-default">
      <AppleIcon />
      <PlayIcon />
      <span>Download app</span>
    </div>
  </div>
);

export default DownloadAppButton;
