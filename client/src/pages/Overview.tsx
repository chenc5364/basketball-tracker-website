/*
  Overview page - League and team information
*/
import { MapPin, Calendar, Info, Trophy, Shirt, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
// import { OVERVIEW_INFO, TEAM_INFO } from "@/lib/data";

const COURT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663436047923/KyCgDSb4mcg4qtRETmWrCn/court-pattern-ZxwFDT4dsca7vd5oUK6xAt.webp";

const InfoCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-5 hover:border-[oklch(0.68_0.19_42/0.4)] transition-colors duration-200">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-[oklch(0.68_0.19_42)]" />
      <span
        className="section-label"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", color: "oklch(0.68 0.19 42)" }}
      >
        {title}
      </span>
    </div>
    <div className="text-[oklch(0.78_0.005_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {children}
    </div>
  </div>
);

export default function Overview() {
  return (
    <PageLayout title="League Overview" subtitle="Season Info">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: info cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard icon={Calendar} title="Season Dates">
            <strong className="text-white">March 21 – May 30, 2026</strong>
            <br />
            Registration: Jan 21 – Apr 1, 2026
          </InfoCard>

          <InfoCard icon={MapPin} title="Locations">
            <strong className="text-white">Carmel Valley Recreation Center</strong>
            <br />
            3777 Townsgate Drive, San Diego, CA 92130
            <br />
            <br />
            <strong className="text-white">Ocean Air Park</strong>
            <br />
            4770 Fairport Way, San Diego, CA 92130
          </InfoCard>

          <InfoCard icon={Info} title="Game Days">
            Games are played on Wednesday evenings (around 4-6pm) and Saturday mornings (around 10am-12pm) at Carmel Valley Rec Center and Ocean Air Park.
          </InfoCard>

          <InfoCard icon={Users} title="Team Formation">
            All teams are formed via a draft process. Siblings are guaranteed to play on the same team.
          </InfoCard>

          <InfoCard icon={Shirt} title="Uniforms & Jerseys">
            All players receive a reversible jersey and shorts to keep at the end of the season.
          </InfoCard>

          <InfoCard icon={Trophy} title="Season Awards">
            Players on teams that finish 1st or 2nd place will receive a trophy.
          </InfoCard>
        </div>

        {/* Right: court image + quick stats */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-sm overflow-hidden border border-[oklch(0.28_0.008_265)]"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={COURT_IMG}
              alt="Basketball court overhead view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick stats */}
          <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-5">
            <div
              className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Quick Facts
            </div>
            <div className="space-y-3">
              {[
                { label: "League", value: "Carmel Valley Spring 2026" },
                { label: "Division", value: "Grades 3rd–4th Boys" },
                { label: "Team", value: "Connor, Nathan and Eliot" },
                { label: "Total Teams", value: "8 teams" },
                { label: "Regular Season Games", value: "28 games" },
                { label: "Contact", value: "Ryan@MasterSports.com" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-2">
                  <span
                    className="text-[oklch(0.55_0.01_265)] text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-white text-sm text-right"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MasterSports link */}
          <a
            href="https://www.mastersports.com/leagues/carmel-valley-summer-2026-spring-basketball-league/divisions/boys-grades-3-4"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 border border-[oklch(0.68_0.19_42/0.4)] text-[oklch(0.68_0.19_42)] text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[oklch(0.68_0.19_42/0.1)] transition-colors duration-200"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
          >
            View on MasterSports →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
