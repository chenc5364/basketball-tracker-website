/*
  Videos page - Game videos
*/
import { AlertCircle, Youtube } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { GAME_VIDEOS, type VideoEntry } from "@/lib/data";

function VideoCard({ video }: { video: VideoEntry }) {
  return (
    <div className="bg-oklch(1_0_0) border border-[oklch(0.90_0.002_265)] rounded-sm overflow-hidden hover:border-[oklch(0.52_0.16_180/0.4)] transition-all duration-200 group">
      {/* YouTube embed */}
      <div className="relative" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Video info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-[oklch(0.20_0.008_265)] font-bold text-sm leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em", fontSize: "1rem" }}
          >
            {video.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[oklch(0.50_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {video.date}
          </span>
          {video.opponent && (
            <>
              <span className="text-[oklch(0.80_0.002_265)]">·</span>
              <span className="text-[oklch(0.50_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                vs {video.opponent}
              </span>
            </>
          )}
        </div>
        {video.description && (
          <p className="text-[oklch(0.50_0.01_265)] text-xs mt-2 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const hasVideos = GAME_VIDEOS.length > 0;

  return (
    <PageLayout title="Game Videos" subtitle="Game Footage">
      {!hasVideos ? (
        /* Placeholder state */
        <div className="max-w-2xl">
          <div className="bg-oklch(1_0_0) border border-[oklch(0.90_0.002_265)] border-l-4 rounded-sm p-6 mb-6" style={{ borderLeftColor: "oklch(0.52 0.16 180)" }}>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[oklch(0.52_0.16_180)] flex-shrink-0 mt-0.5" />
              <div>
                <div
                  className="text-[oklch(0.20_0.008_265)] font-bold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  Videos Coming Soon
                </div>
                <p className="text-[oklch(0.50_0.01_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Game videos will be added here once YouTube links are provided. The season begins March 21, 2026.
                </p>
              </div>
            </div>
          </div>

          {/* YouTube placeholder card */}
          <div className="bg-oklch(1_0_0) border border-[oklch(0.90_0.002_265)] rounded-sm overflow-hidden">
            <div
              className="flex items-center justify-center bg-[oklch(0.95_0.002_265)]"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.90_0.002_265)] flex items-center justify-center mx-auto mb-3">
                  <Youtube className="w-8 h-8 text-[oklch(0.50_0.01_265)]" />
                </div>
                <p
                  className="text-[oklch(0.50_0.01_265)] text-sm font-bold uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  Game videos will appear here
                </p>
              </div>
            </div>
            <div className="p-4">
              <div
                className="text-[oklch(0.50_0.01_265)] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
              >
                Game Highlight — Coming Soon
              </div>
              <div className="text-[oklch(0.80_0.002_265)] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Season starts Mar 21, 2026
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Real videos grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}
