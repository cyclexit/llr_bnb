import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyItem.css';
import StarRatingComponent from 'react-star-rating-component';

const PropertyItem = ({ property, setProperty }) => {
	return (
		<div className='property'>
			<Link to={`/property/${property.id}`}>
				<div onClick={() => setProperty(property)}>
					<h3> {property.country} </h3>
					<h2> {property.title} </h2>
					<p> {`$${property.price} CAD/night`}</p>

					<div style={{ fontSize: '15px' }}>
						<StarRatingComponent
							name='rating'
							editing={false}
							starCount={5}
							starColor={'#00A699'}
							value={property.rating}
						/>
						<p className='review-num'>
							{`(${property.num_reviews})`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default PropertyItem;
