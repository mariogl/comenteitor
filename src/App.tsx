import CommentsList from "./components/CommentsList/CommentsList";

const App = (): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <div className="container mx-auto px-4 h-12 border flex items-center">
          <h1 className="font-medium text-3xl">Comenteitor</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="container mx-auto p-4 border">
          <CommentsList />
        </div>
      </main>
    </>
  );
};

export default App;
