import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Glyph } from '@src/types'
import { icons } from '@src/shared/icons'

type Props = { glyph: Glyph }


export const Icon: FC<Props> = ({ glyph }) => {
  return (
    <>
      <FontAwesomeIcon icon={icons[glyph]}/>
    </>
  )
}
