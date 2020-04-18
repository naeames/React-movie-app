import React from 'react'

const FilterName = ({search}) => {


    return (<div>
        <input className="form-control" placeholder='Search movie'  onChange={(e)=>search(e.target.value)} />
    </div>)
}
export default FilterName