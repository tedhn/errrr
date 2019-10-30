import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './scss.scss'
import jump from 'jump.js';

function App(){
	let arr = ['#image1' , '#image2' ,'#image3']
	const [num , setNumber] = useState(0);

	const goNext = () => {
		let x = (num + 1)% 3;	

		setNumber(x);
		jump(arr[x])
	}

	const goBack = () => {
		let x = (num - 1)% 3;

		if(x < 0){
			x = 2
		}
		setNumber(x);
		jump(arr[x])
	}


	return(
		<div className='main'>
			<div className='a' id='image1'></div>
			<div className='b' id='image2'></div>
			<div className='c' id='image3'>	</div>

			<div className='buttonContainer'>
				<button onClick={goBack} id='back'>
					<i className="fa fa-angle-left" ></i>
				</button>
				<button onClick={goNext} id='next'>
					<i className="fa fa-angle-right" ></i>
				</button>	
			</div>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));

