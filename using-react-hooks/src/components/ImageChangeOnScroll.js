import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
	const imgIds = [1124, 1269, 1725, 187, 8367, 823];

	return (
		<div>
			{imgIds.map(id => {
				return(
					<div key={id}>
						<ImageToggleOnScroll 
							primaryImg={`../../speakers/bw/Speaker-${id}.jpg`}
							secondaryImg={`../../speakers/Speaker-${id}.jpg`}
						/>
					</div>
				);
			})}
		</div>
	); 
};

export default ImageChangeOnScroll;