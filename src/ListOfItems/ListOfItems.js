import React, { useState } from 'react';
import './ListOfItems.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListItem = (props) => {
    const onItemClick = () => {
        props.showImg();
        props.changeSelectedImage(props.item);
    };
    return(
    <div className='liDiv'>
        <li onClick={onItemClick}>
            <p>Title: {props.item.title}</p>
            <p>Description: {props.item.description}</p> 
        </li>
    </div>
    )
};
const ListOfItems = (props) => {
    const {items} = props; 
    const ulStyles = {
        width: '400px',
        float: 'left'
    };
    const [imgClassName, setImgClassName] = useState('displayNone');
    const [selectedImage, setSelectedImage] = useState('displayNone');
    let showImg = () => {
        setImgClassName('displayBlock');
    }
    let hideImg = () => {
        setImgClassName('displayNone');
    }
    let changeSelectedImage = (image) => {
        setSelectedImage(image);
    }
    return (
        <div style={ulStyles}>
            <h2>Click on the book you like:</h2>
            <ul>
                {items.map(item =><ListItem item={item} showImg={showImg} changeSelectedImage={changeSelectedImage}></ListItem>)}
            </ul>
            <div className={imgClassName}>
                <button className="btn btn-primary" type="button" onClick={hideImg}>Hide it!</button>
                <img style={{height: "200px", float: "left" }}  src={selectedImage.coverImageUrl} alt={selectedImage.title}/>
            </div>
        </div>
    );
}

export default ListOfItems;
