import { forwardRef, memo, SVGProps } from 'react'
import * as icons from './iconsOrdinary'

interface DynamicIconProps extends SVGProps<SVGSVGElement> {
  iconId: keyof typeof icons
}

// forwardRef позволяет передать реф от родительского компонента к элементу внутри компонента DynamicIcon
const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(({ iconId, ...props }, ref) => {
  // Определяем компонент иконки на основе iconId
  const IconComponent = icons[iconId]

  // Если иконка с указанным iconId не найдена, возвращаем null
  // Это предотвращает попытку рендеринга несуществующего компонента
  if (!IconComponent) return null

  // Возвращаем компонент иконки с переданным ref и остальными пропсами
  // ref используется для получения ссылки на DOM элемент иконки
  return <IconComponent {...props} ref={ref} />
})

export default memo(DynamicIcon)
