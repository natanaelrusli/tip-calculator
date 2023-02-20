import { OutputFieldProps } from '../../constants/propsTypes'

function OutputLabel( props: OutputFieldProps ) {
  return (
    <div className='output-group'>
      <div className="output-group__left">
        <div className='output-group__primary'>
          { props.primaryText }
        </div>
        <div className='output-group__secondary'>
          / { props.secondaryText ? props.secondaryText : 'person' }
        </div>
      </div>
      <div className="output-group__right">
        ${ props.amount }
      </div>
    </div>
  )
}

export default OutputLabel