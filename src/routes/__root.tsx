import "../App.css";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: App,
});

function App() {
  return (
    <div className="planner-app">
      <header>
        <h1>Family Planner</h1>
        <nav>{/* Basic navigation */}</nav>
      </header>
      <main>
        <Outlet /> {/* Ready for planner routes */}
      </main>
      <footer>
        <p>Built with ❤️ for family planning</p>
      </footer>
    </div>
  );
}

export default App;
