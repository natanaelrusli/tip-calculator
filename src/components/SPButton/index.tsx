import '../../styles/components/sp-button.scss'
import Props from './propTypes'

function SPButton({ text }: Props) {
  return (
    <div className='sp-button'>
      { text }
    </div>
  )
}

export default SPButton