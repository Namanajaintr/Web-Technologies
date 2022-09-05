import PersonDetail from "./component/PersonDetail";
import PersonDetails2 from "./component/PersonDetails2";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <PersonDetail />
        <PersonDetails2 />
      </ErrorBoundary>
    </div>
  );
}

export default App;
