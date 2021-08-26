import BoardRow from "./BoardRow"

export default function Board() {
  return (
    <div>
      <BoardRow />
      <BoardRow black />
      <BoardRow />
      <BoardRow black />
      <BoardRow />
      <BoardRow black />
      <BoardRow />
      <BoardRow black />
    </div>
  )
}