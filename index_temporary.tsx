import { createRoot } from 'react-dom/client'
import { ArrowIosForward, DynamicIcon } from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <b>This is Library of It-Leaders (Temporary)</b>
    <div style={{ width: '200px', height: '200px', background: 'lightblue' }}>
      <DynamicIcon iconId={'ArrowBackOutline'} width={24} color={'red'} />
    </div>
  </div>
)
