import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList=[
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
        {
        id:1,
        tagName:"python",
        tagDesc:"python is a dynamically typed language"

    },
]
  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-container-2">

            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categories your question with other, similar questions.</p>
            <p className='tags-p'>Using a right tags makes it easier for others to find and answer your question</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag)=>(
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags