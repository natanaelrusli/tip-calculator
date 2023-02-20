type Props = {
  children?: string | JSX.Element | JSX.Element[]
  type?: string
}

type OutputFieldProps = {
  primaryText: string
  secondaryText?: string
  amount: number
}

export type { Props, OutputFieldProps }
