import { useState } from 'react'
import explorer from './data/folderData'
import './App.css'
import Folder from './componants/folder'

function App() {
  const [explorerData, setexplorerData] = useState(explorer)
  return (
   <>
    <Folder explorer={explorerData}/>
   </>
  )
}

export default App
