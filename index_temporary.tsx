import { createRoot } from 'react-dom/client'
import { Checkbox } from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <b>This is Library of It-Leaders (Temporary)</b>
    <div>
      <Checkbox
        label={'gago'}
        // checked={true}
        // disabled
      />
    </div>
  </div>
)
