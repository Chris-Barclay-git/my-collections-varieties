import VaretiesList from './VarietiesList'
import AddVariety from './AddVariety'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <AddVariety />
        <VaretiesList />
      </section>
    </>
  )
}

export default App
