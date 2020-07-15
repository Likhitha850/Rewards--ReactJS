import React from 'react'

const Rewards = ({rewards}) => {
    return (
        <div>
            <center><h1>Rewards List</h1></center>
            {Object.keys(rewards).map((key) => (
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Customer Id : {key}</h5>
                    
                    {Object.keys(rewards[key]).map((month) => (
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Month : {month} - Points : {rewards[key][month]}</h5>
                            </div>
                        </div>
                    ))}     
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Rewards