import { MenuList } from './MenuList'

const App = () => {
  return (
    <main>
      <div className="main-title">
        <h1>
          our <span>menu</span>
        </h1>
        <div className="underline"></div>
      </div>
      <MenuList />
    </main>
  )
}

export default App
