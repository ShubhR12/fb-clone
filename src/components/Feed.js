import React from 'react'
import "../css/Feed.css"
import Messagesender from './Messagesender'
import Post from './Post'
import Storyreel from './Storyreel'

const Feed = () => {
  return (
    <div className='feed'>
       <Storyreel/>
       <Messagesender/>
       <Post photoUrl="" image="" username="John" timeStamp="2:30pm" message=""/>

    </div>
  )
}

export default Feed