/*
  Videos page - Game videos grouped by date
*/
import { AlertCircle, Youtube } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { GAME_VIDEOS, type VideoEntry } from "@/lib/data";

function VideoCard({ video }: { video: VideoEntry }) {
  return (
    <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm overflow-hidden hover:border-[oklch(0.68_0.19_42/0.4)] transition-all duration-200 group">
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
            className="text-white font-bold text-sm leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em", fontSize: "1rem" }}
          >
            {video.description}
          </h3>
        </div>
        {video.opponent && (
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[oklch(0.55_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              vs {video.opponent}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const hasVideos = GAME_VIDEOS.length > 0;

  // Group videos by date
  const videosByDate = GAME_VIDEOS.reduce((acc, video) => {
    const date = video.date || "Undated";
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(video);
    return acc;
  }, {} as Record<string, VideoEntry[]>);

  return (
    <PageLayout title="Game Videos" subtitle="Game Footage">
      {!hasVideos ? (
        /* Placeholder state */
        <div className="max-w-2xl">
          <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-6 mb-6" style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[oklch(0.68_0.19_42)] flex-shrink-0 mt-0.5" />
              <div>
                <div
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  Videos Coming Soon
                </div>
                <p className="text-[oklch(0.65_0.01_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Game videos will be added here once YouTube links are provided. The season begins March 21, 2026.
                </p>
              </div>
            </div>
          </div>

          {/* YouTube placeholder card */}
          <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm overflow-hidden">
            <div
              className="flex items-center justify-center bg-[oklch(0.13_0.008_265)]"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.20_0.008_265)] flex items-center justify-center mx-auto mb-3">
                  <Youtube className="w-8 h-8 text-[oklch(0.45_0.01_265)]" />
                </div>
                <p
                  className="text-[oklch(0.45_0.01_265)] text-sm font-bold uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  Game videos will appear here
                </p>
              </div>
            </div>
            <div className="p-4">
              <div
                className="text-[oklch(0.45_0.01_265)] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
              >
                Game Highlight — Coming Soon
              </div>
              <div className="text-[oklch(0.35_0.008_265)] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Season starts Mar 21, 2026
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Real videos grouped by date */
        <div className="space-y-8">
          {Object.entries(videosByDate).map(([date, videos]) => (
            <div key={date}>
              {/* Game date header */}
              <div className="mb-4">
                <h2
                  className="text-[oklch(0.68_0.19_42)] font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {date} Game Vid
                </h2>
                <div className="h-1 w-16 bg-[oklch(0.68_0.19_42)] mt-2"></div>
              </div>

              {/* Videos for this date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <VideoCard key={video.youtubeId} video={video} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
