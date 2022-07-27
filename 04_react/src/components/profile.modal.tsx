import i_user from "../interface/user.interface";

function ProfileModal(props: { user: i_user, onClose: () => void }) {
	const w = (props.user.win ? props.user.win : 0)
	const l = (props.user.lose ? props.user.lose : 0)
	const rate = ((w / (w + l) * 100).toFixed(2));
	const rate_to_print = (rate === "NaN" ? "" : rate + "%");
	const p = (props.user.profilePicPath ? props.user.profilePicPath : "profile_picture/default.png");

	return (
		<div className="modal">
			<button className="btn btn--cross" onClick={props.onClose}>✘</button>
			<h2>{props.user.name}</h2>
			<img className="img" src={p} alt="profile" />
			<p>winrate: {w}|{l} {rate_to_print}</p>
		</div>
	);
}

export default ProfileModal