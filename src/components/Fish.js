import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers.js'

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            desc: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }),
        addToOrder: PropTypes.func.isRequired
    }

    render() {
        const { desc, image, name, price, status } = this.props.details
        const isAvailable = status === 'available'

        return (
            <li className='menu-fish'>
                <img src={image} alt={name} />
                <h3 className='fish-name'>
                    {name}
                    <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                >
                    {isAvailable ? 'Add To Cart' : 'Sold Out'}
                </button>
            </li>
        )
    }
}

export default Fish
