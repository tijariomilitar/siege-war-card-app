import { useState } from 'react';

const Signup = ({ leader, box }) => {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [username, setUsername] = useState("");
	let [password, setPassword] = useState("");
	let [confirmPassword, setConfirmPassword] = useState("");

	function signup(){
		let user = {
			name: name,
			email: email,
			username: username,
			password: password,
			confirmPassword: confirmPassword
		}
	};

	return (
		<div className="container bg h-center cursor-1 padding-left-20 padding-right-20" style={styles.home}>
			<div className="box b2 container ground center radius-30 padding-20 noselect" style={{background: `rgb(9,9,9, 0.6)` }}>
				<div className="box b1 em30 bold georgia center" style={{color:'#fff'}}>Siege</div>
				<div className="box b1 em13 underline bold georgia center" style={{color:'#fff'}}>The War Card Game</div>
				<div className="box b1 em13 bold georgia center" style={{color:'#fff'}}>Signup</div>
				<div className="box b2-3 container margin-top-10 center">
					<div className="box b1 container em09 bold" style={{color:"#fff"}}>Nome completo</div>
					<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center" onChange={e => setName(e.target.value)}></input>
				</div>
				<div className="box b2-3 container margin-top-10 center">
					<div className="box b1 container em09 bold" style={{color:"#fff"}}>E-mail</div>
					<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center" onChange={e => setEmail(e.target.value)}></input>
				</div>
				<div className="box b2-3 container margin-top-10 center">
					<div className="box b1 container em09 bold" style={{color:"#fff"}}>Usuário</div>
					<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center" onChange={e => setUsername(e.target.value)}></input>
				</div>
				<div className="box b2-3 container margin-top-10 center">
					<div className="box b1 container em09 bold" style={{color:"#fff"}}>Senha</div>
					<input type="password" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center" onChange={e => setPassword(e.target.value)}></input>
				</div>
				<div className="box b2-3 container margin-top-10 center">
					<div className="box b1 container em09 bold" style={{color:"#fff"}}>Confirmar senha</div>
					<input type="password" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center" onChange={e => setConfirmPassword(e.target.value)}></input>
				</div>
				<div className="box b2-3 container em13 menu-btn1 height-50 margin-top-10 noselect transparent cursor-3 center" onClick={() => signup()}><div className="center" style={{color:"#fff"}}>Cadastrar</div></div>
			</div>
		</div>
	);
};

let styles = {
	home: {
		backgroundImage: 'url("https://i.pinimg.com/originals/40/24/0f/40240f3848e82d04cba95c1e7fb952c5.jpg")',
		height: window.innerHeight
	}
}

export default Signup;