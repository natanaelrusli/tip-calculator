import '../../styles/components/number-input.scss'
import Props from './propTypes'
import IconPerson from '../../assets/images/icon-person.svg'

function NumberInput({prefix}:Props) {
  return (
    <div className='number-input'>
      <img src={IconPerson} alt="" className='prefix' />
      <input type="text" className='input' />
    </div>
  )
}

export default NumberInput