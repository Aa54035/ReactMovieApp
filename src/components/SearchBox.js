import React from 'react'

const SearchBox = (props) => {
    return (

        <div className="col col-sm-4">
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                type="text" name="" id=""
                placeholder='Type for Search ...' />
        </div>

    )
}

export default SearchBox