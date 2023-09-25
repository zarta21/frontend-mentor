import React from 'react'
import './styles.scss'

const StatsPreviewCard = () => {
  return (
    <div className='container'>
        <div className="img">
            <img src="./image-header-mobile.jpg" alt="moment in office" />
        </div>
        <div className="content">
            <div className="title">
                <h1>Get <span>insights</span> that help your business grow.</h1>
            </div>
            <div className="text">
                <p>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.
                </p>
            </div>
            <div className="stats">
                <div className="stats-1">
                    <h2>10k+</h2>
                    <p>companies</p>
                </div>
                <div className="stats-2">
                    <h2>314</h2>
                    <p>templates</p>
                </div>
                <div className="stats-3">
                    <h2>12m+</h2>
                    <p>queries</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsPreviewCard