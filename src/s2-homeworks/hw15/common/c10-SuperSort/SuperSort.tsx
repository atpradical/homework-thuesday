import React from 'react'
import arrowUp from './../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import disabledArrows from '../../assets/disabledArrows.png'


// добавить в проект иконки и импортировать
const downIcon = arrowDown //'[\\/]'
const upIcon = arrowUp //'[/\\]'
const noneIcon = disabledArrows //'[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
    return sort === ''
        ? down
        : sort === down
            ? up
            : sort === up
                ? ''
                : down
}

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                     sort,
                                                     value,
                                                     onChange,
                                                     id = 'hw15',
                                                 }) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    console.log(icon)

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
                <img
                    id={id + '-icon-' + sort}
                    src={icon}
                />
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            {/*{icon} /!*а это убрать*!/*/}
            </span>
    )
}

export default SuperSort
