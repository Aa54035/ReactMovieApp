import React from 'react'

const movieList = (props) => {
    const FavouritesComponents = props.favComponents;

    return (
        < >
            {props.movies.map((name, index) => (
				<div className='image-container d-flex justify-content-start m-3'>

					
							<img src={name.Poster} alt="Movie name" />
							<div
								onClick={() => props.handleFavouritesClick(name)}
								className="overlay d-flex align-items-center justify-content-center"
							>
							<FavouritesComponents />
							</div>
                     
                </div>
            ))}

        </ >
    )
}

export default movieList;
