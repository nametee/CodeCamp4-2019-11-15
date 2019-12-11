import React from 'react'

class List extends React.Component {
    render(){
        const {listItem} = this.props
        return(
            <div className="container">
                {listItem.map( ({id,name}) =>(
                    <div className="card bg-light mb-3" key={id}>
                        <div className="card-body">
                            <button type="button" className="btn">
                                {name}
                            </button>
                        </div>
                  </div>
                ))}
            </div>
        )
    }
}

export default List