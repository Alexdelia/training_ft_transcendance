function ChatModal(props: { srcName: string, dstName: string, onClose: () => void }) {
	return (
		<div className='modal'>
			<button className='btn btn--cross' onClick={props.onClose}>✘</button>
			<h2>{props.srcName} ⇌ {props.dstName}</h2>
			<div className='card card--chat'></div>
			<input className='card card--input' type='text' placeholder=' 💬' />
		</div>
	);
}

export default ChatModal