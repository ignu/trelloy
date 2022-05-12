import { FC } from "react"

type PropTypes = {
  category: string,
}

const TaskColumn: FC<PropTypes> = ({category}) => {
  return (
  <div>
      <h1>{category}</h1>
  </div>
  )

}

export default TaskColumn
