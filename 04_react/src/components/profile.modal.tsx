import userEvent from "@testing-library/user-event";
import i_user from "../interface/user.interface";

function ProfileModal(props: { user: i_user, onClose: () => void })
{
	const w = (props.user.win ? props.user.win : 0)
	const l = (props.user.lose ? props.user.lose : 0)
	const rate = ((w / (w + l) * 100).toFixed(2));
	const rate_to_print = (rate === "NaN" ? "" : rate + "%");
	const p = (props.user.profilePicPath ? props.user.profilePicPath : "profile_picture/default.png");

	return (
		<div className='modal'>
			<div>
				<h2>{props.user.name}</h2>
			</div>
			<div>
				<img className="img" src={p} alt="profile" />
			</div>
			<div>
				<p>winrate: {w}|{l} {rate_to_print}</p>
			</div>
			<div>
				{"adelille" !== props.user.name && <input className='card card--input' type='text' placeholder=' 💬' />}
			</div>
		</div >
	);
}

export default ProfileModal