import React from 'react';
import {connect} from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/Collection-item.component';
import './collection.styles.scss'

const CollectionPage = ({collection })=>{
    const {title, items} = collection;
    return(
    <div className='collection-page'>
       <h2 className='title'> {title} </h2>
       <div className='items'> 
       {
        items.map(item=> 
        <CollectionItem key={item.id} item={item}></CollectionItem>)
       }
       </div>
    </div>
);
};

const mapStateToProps=(state, ownProps)=>({
    collection:selectCollection(ownProps.match.prams.collectionId)(state )
})
export default connect(mapStateToProps)(CollectionPage);