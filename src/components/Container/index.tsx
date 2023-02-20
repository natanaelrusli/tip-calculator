import '../../styles/components/container.scss'
import Props from '../../constants/propsTypes'

function Container({ children, type }: Props) {
  let dynamicClass: string = ''
  
  const decideClass = (type: string) => {
    if (type !== '') {
      dynamicClass = type
    }
  }

  decideClass(String(type))
  
  return (
    <div
      className= {
        `container ${dynamicClass}`
      }
    >
      {children}
    </div>
  )
}

export default Container