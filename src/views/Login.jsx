import React from 'react';
import { Button, Col, Container, Input, Row } from 'reactstrap';

const Login = () => {
	return (
		<>
			<div
				style={styles.background}
				className='d-flex justify-content-center align-items-center'
			>
				<Container className='d-flex justify-content-center align-items-center'>
					<Row className='p-3 d-flex justify-content-center align-items-center'>
						<Col
							md='auto'
							lg='6'
							className='d-flex justify-content-center align-items-center'
							style={styles.container}
						>
							<Container className='d-flex justify-content-center'>
								<div
									className='text-center'
									style={{ width: 400 }}
								>
									<h3 style={styles.title}>Sign In</h3>
									<p style={{ color: '#C1C6CC' }}>
										Pellentesque eros ex, scelerisque quis
										magna non, pretium tempus neque.
									</p>

									<div className='d-flex flex-column align-items-center'>
										<Input
											type='email'
											name='email'
											placeholder='Email'
											style={styles.input}
										/>
										<Input
											type='password'
											name='password'
											placeholder='Password'
											style={styles.input}
										/>
									</div>
									<div className='d-block'>
										<Button
											style={{
												backgroundColor: '#46525F',
												color: '#FFFFFF',
												width: 280,
												height: 40,
											}}
										>
											Sign In
										</Button>
									</div>
									<p
										style={{
											color: '#C1C6CC',
											marginBottom: 0,
											marginTop: 30,
											fontSize: 14,
											cursor: 'pointer',
										}}
									>
										Forgot Password
									</p>
								</div>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

const styles = {
	background: {
		height: '100vh',
		width: '100%',
		backgroundColor: '#15669A',
	},
	container: {
		height: 500,
		width: 550,
		backgroundColor: '#F7F8FA',
		borderRadius: 10,
	},
	title: {
		color: '#4A515C',
		marginBottom: 15,
	},
	input: { height: 40, width: 280, margin: ' 15px 0' },
};

export default Login;
