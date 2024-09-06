import { createRoot } from 'react-dom/client'
import { DynamicIcon } from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <b>This is Library of It-Leaders (Temporary)</b>
    <div>
      <DynamicIcon iconId={'ArrowIosForwardOutline'} />
    </div>
  </div>
)
