const Loading = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "200px" }}
		>
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}

export default Loading
