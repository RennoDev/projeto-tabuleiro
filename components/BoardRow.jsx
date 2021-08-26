import House from "./House";
import styles from "../styles/boardRow.module.css"

export default function BoardRow(props) {
  return (
    <div className={styles.boardRow}>
      <House black={props.black} />
      <House black={!props.black} />
      <House black={props.black} />
      <House black={!props.black} />
      <House black={props.black} />
      <House black={!props.black} />
      <House black={props.black} />
      <House black={!props.black} />
    </div>
  )
}