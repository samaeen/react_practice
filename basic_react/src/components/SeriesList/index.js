import React from 'react';
import './index.css';

const SeriesListItem =({series})=>(
	<li>
		{series.show.name}
	</li>
)
const SeriesList =(props)=>{
	return(
		<div>
			<ul className="series-list">
				{props.list.map(series=>(
					<li key={series.show.id}>
						<SeriesListItem series={series} key={series.show.id}/>
					</li>
					))}
			</ul>
		</div>
		)
}

export default SeriesList;