import React, {useState} from 'react';
import styles from './card.module.css'

function CardComponent(props) {
    let flag = false;
    let [cls, setCls] = useState(styles.card)


    let change = () => {
        if (flag) {
            setCls(styles.card)
            console.log(`1`)
        } else {
            setCls(styles.card1)
            console.log(`2`)
        }
        flag = !flag;
    }

    return (
        <div onClick={()=> change()} className={cls}>
            <button onClick={change}>change</button>
            <h1>{props.title || `N/A`}</h1>
            <h1>{props.price ?? `NET`}</h1>
            <h1>{props.text}</h1>
        </div>
    );
}

export default CardComponent;
