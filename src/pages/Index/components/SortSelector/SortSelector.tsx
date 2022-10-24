import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setSortType } from 'slices/filterPizzasSlice/filterPizzasSlice'

import Selector from 'components/ui/Selector'
import { SortPizzasType } from 'models/EntityModels/pizzas'


const convertSortTypeToSelectorType = (sortType: SortPizzasType) => {
  return { id: sortType.sortProperty, value: sortType.name }
}
const serializeSelectorItems = (sortTypes: SortPizzasType[]) => {
  return sortTypes.map(sortType => convertSortTypeToSelectorType(sortType))
}

const SortSelector = () => {
  const dispatch = useAppDispatch()
  const { serializedSortTypes, serializedSelectedSortType } = useAppSelector(state => ({
    serializedSortTypes: serializeSelectorItems(state.filterPizzas.sortTypes),
    serializedSelectedSortType: convertSortTypeToSelectorType(state.filterPizzas.sortType)
  }))

  const onSetSortType = (selectorItem: { id: string; value: string }) => {
    dispatch(setSortType({ name: selectorItem.value, sortProperty: selectorItem.id }))
  }

  return (
    <Selector
      items={serializedSortTypes}
      selectedItem={serializedSelectedSortType}
      setItem={onSetSortType}
      sortLabel={'Отсортировать по'}
    />
  )
}

export default SortSelector
