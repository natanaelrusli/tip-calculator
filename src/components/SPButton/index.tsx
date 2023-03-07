import '../../styles/components/sp-button.scss'
import Props from './propTypes'

function SPButton({ text, handleClick }: Props) {
  return (
    <div className='sp-button' onClick={handleClick}>
      { text }
    </div>
  )
}

export default SPButton