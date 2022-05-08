import React from 'react'
import './features.scss'
import moneyIcon from '../../images/icon-money.png';
import chatIcon from '../../images/icon-chat.png';
import securityIcon from '../../images/icon-security.png';
import FeatureItem from '../FeatureItem/featureItem';

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
                icon = {chatIcon}
                title = "You are our #1 priority"
                text = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            ></FeatureItem>
            <FeatureItem
                icon = {moneyIcon}
                title = "More savings means higher rates"
                text = "The more you save with us, the higher your interest rate will be!"
            ></FeatureItem>
            <FeatureItem
                icon = {securityIcon}
                title = "Security you can trust"
                text = "We use top of the line encryption to make sure your data and money is always safe."
            ></FeatureItem>
        </section>
    )
}

export default Features