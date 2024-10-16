import { createRoot } from 'react-dom/client'
import { Layout, Textarea } from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <Layout>
      <p>some child of layout</p>
      <Textarea />

      {/*<div style={{ width: '1000px', height: '400px', background: 'lightblue' }}></div>*/}
    </Layout>
    {/*<b>This is Library of It-Leaders (Temporary)</b>*/}
    {/*<div style={{ width: '1000px', height: '400px', background: 'lightblue' }}></div>*/}
  </div>
)
