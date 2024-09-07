import * as icons from './iconComponents'

export default {
  title: 'Icons',
}

export const IconsOrdinary = () => {
  return (
    <>
      {' '}
      {Object.keys(icons).map(iconKey => {
        const IconComponent = icons[iconKey as keyof typeof icons]
        return (
          <div key={iconKey} style={{ display: 'flex', alignItems: 'center' }}>
            <IconComponent width={24} height={24} />
            <p style={{ marginLeft: '1rem' }}>{iconKey}</p>
          </div>
        )
      })}
    </>
  )
}
