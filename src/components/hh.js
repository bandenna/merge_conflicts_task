import { useState } from 'react'
import { Link } from 'react-router-dom'

const ListItem = (props) => {

    const [isClicked, setIsClicked] = useState(false)


    const { details, clickTabId, isActive } = props;
    const { id, name, path } = details;
    const buttonStatus = isActive ? "forcolor" : ""

    return (
        <>
            <Link to={path}>
                <button className={`btn-style ${buttonStatus}`} onClick={() => (clickTabId(id))}>{name}</button>
            </Link>
        </>

    )

}

export default ListItem