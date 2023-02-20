import '../../styles/components/card.scss'
import { Props } from '../../constants/propsTypes'

function Card({ children }: Props) {
  return (
    <div className="card">
      { children }
    </div>
  )
}

export default Card