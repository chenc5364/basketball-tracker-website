import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Overview from "./pages/Overview";
import ScheduleAndPractices from "./pages/ScheduleAndPractices";
import StandingsPage from "./pages/Standings";
import RosterPage from "./pages/Roster";
import VideosPage from "./pages/Videos";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={ScheduleAndPractices} />
      <Route path={"/overview"} component={Overview} />
      <Route path={"/schedule"} component={ScheduleAndPractices} />
      <Route path={"/standings"} component={StandingsPage} />
      <Route path={"/roster"} component={RosterPage} />
      <Route path={"/videos"} component={VideosPage} />
      {/* Final fallback route */}
      <Route component={ScheduleAndPractices} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
