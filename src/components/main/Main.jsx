import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
			<p onClick={() => window.location.reload()}>Gemini</p>

				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , Buddy</span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Write a short story about two students trapped in a haunted house in Montana.")
								}
							>
								<p>Write a short story about two students trapped in a haunted house in Montana.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Generate a list of keywords for a series of blog posts for a budget travel website."
									)
								}
							>
								<p>Generate a list of keywords for a series of blog posts for a budget travel website. </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How to Create a Gyroscope using Disc?")
								}
							>
								<p>How to Create a Gyroscope using Disc?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Create a Script for the youtube video about coding "
									);
								}}
							>
								<p>Create a Script for the youtube video about coding </p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img className="gemini-icon" src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
					<input
					onChange={(e) => {
						setInput(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSent();
						}
					}}
					value={input}
					type="text"
					placeholder="Enter the Prompt Here"
				/>
				
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							{input?<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>:null}
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
