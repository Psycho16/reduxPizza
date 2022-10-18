import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import { ReactSVG } from 'react-svg'

import useClickOutside from 'hooks/useClickOutside'

import Icons from 'constants/Icons'

import { SelectorItem } from './types'
import { onRootKeyPress, setFocus } from './utils'
import styles from './styles.module.scss'


interface Props {
  items: SelectorItem[]
  selectedItem: SelectorItem
  setItem: (item: SelectorItem) => void

  sortLabel?: string
}

const Selector = ({ items, selectedItem, setItem, sortLabel }: Props) => {
  const [isOpen, setOpen] = useState(false)

  const popupRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useClickOutside(popupRef, () => {
    setOpen(false)
  })

  const onSetItem = (item: SelectorItem): void => {
    setItem(item)
    setFocus(rootRef)
  }

  const toggleOpenMenu = (): void => {
    setOpen(!isOpen)
  }
  return (
    <div className={classNames(styles['selector-root'], isOpen && styles['selector-root--selected'])} ref={popupRef}>
      <div
        className={styles['elements-wrapper']}
        tabIndex={0}
        role={'button'}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onKeyPress={e => onRootKeyPress(e, toggleOpenMenu)}
        onClick={toggleOpenMenu}
        ref={rootRef}
      >
        <div className={classNames(styles['selected-item-wrapper'], isOpen && styles['selected-item-wrapper--opened'])}>
          {/* <span> */}
          <ReactSVG
            className={classNames(styles['selector-arrow'], isOpen && styles['selector-arrow--rotated'])}
            src={Icons.sortArrow}
          />
          {/* </span> */}
          {sortLabel && <span className={styles['sort-label']}>{sortLabel}:</span>}
          <span className={styles['selected-item-value']}>{selectedItem.value}</span>
        </div>

        <ul role={'listbox'} className={classNames(styles['listbox'], isOpen && styles['listbox--opened'])}>
          {items.map(item => (
            <li key={item.id}>
              <button
                tabIndex={isOpen ? 0 : -1}
                onClick={() => onSetItem(item)}
                className={classNames(
                  styles['variant-button'],
                  item.id === selectedItem.id && styles['variant-button--selected']
                )}
                aria-selected={item.id === selectedItem.id}
                role={'option'}
              >
                <span title={item.value}>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Selector
