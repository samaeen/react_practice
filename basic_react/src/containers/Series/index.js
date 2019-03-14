import React,{Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
class Series extends Component{
  state={
    series:[],
    seriesName:'',
    isFetching:false

  }

  onSeriesInputChange=e=>{
  	this.setState({seriesName:e.target.value,isFetching:true});
  	fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response=>response.json())
      .then(json=>this.setState({series:json,isFetching:false}))

  }
	render(){
		const{series,seriesName,isFetching}=this.state;
		return(
			<div>
				<Intro message="Search your favourite movies" />
				<div>
					<input value={seriesName} 
					type="text" 
					onChange={this.onSeriesInputChange} />
				</div>
				{
					!isFetching && series.length === 0 && seriesName.trim()===""
					&&
					<p>Please Enter Series Name</p>
				}
				{
					!isFetching && series.length === 0 && seriesName.trim()!==""
					&&
					<p>Nothing On this Name</p>
				}
				{
					isFetching && <Loader />
				}
				{
					!isFetching && <SeriesList list={this.state.series}/>
				}
				
			</div>

		)
	}
}

export default Series;