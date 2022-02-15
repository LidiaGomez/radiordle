import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AndrewModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About this game" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This game was created for a boy who loves Radiohead as much as I do.
        Happy Valentine's Day, my love, you deserve way more than Radiordle but I only
        show love in Computer.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="present" />
        <Cell value="U" status="correct"/>
        <Cell value="S" />
        <Cell value="H" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        For
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct"/>
        <Cell value="U" status="correct"/>
        <Cell value="S" status="correct" />
        <Cell value="P" status="correct"/>
        <Cell value="Y" status="correct"/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        From
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="4" />
        <Cell value="E" />
        <Cell value="V" />
        <Cell value="E" status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Always.
      </p>
    </BaseModal>
  )
}
