import React from 'react'
import './featureItem.scss'

const FeatureItem = (props) => {
    const {icon, title, text} = props
    return (
        <div className="feature-item">
            <img
                src={icon}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default FeatureItem