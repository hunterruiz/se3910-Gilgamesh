import ListGroup from "react-bootstrap/ListGroup";
import styles from "../../styles/analysis-table.module.css";

function JSONList({ title, json }) {
  return (
    <>
      <h2>{title}</h2>
      <ListGroup className={styles.listGroup}>
        {/* divides the object up into an array and outputs them with key : value in
        a new ListGroup.Item which is generated every time for each key value in httpsRes */}
        {Object.keys(json).map(function (key) {
          return (
            <ListGroup.Item className={styles.listItem} key={key}>
              {key + " : " + json[key]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default JSONList;
