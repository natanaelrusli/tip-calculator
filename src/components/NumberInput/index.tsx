import '../../styles/components/number-input.scss'
import Props from './propTypes'

function NumberInput({prefix, handleChange, value}:Props) {
  return (
    <div className='number-input'>
      <img src={prefix} alt="" className='prefix' />
      <input type="text" className='input' value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default NumberInput