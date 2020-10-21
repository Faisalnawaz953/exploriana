import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="Down" ref={ref} {...props} />;
});

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});
const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

export default function LangingPage() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		setTimeout(function () {
			handleClickOpen();
		}, 1000);
	}, []);
	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				TransitionComponent={Transition}
			>
				<DialogTitle
					id="customized-dialog-title"
					style={{
						textAlign: "center",
						color: "#262673",
						backgroundColor: "",
					}}
					onClose={handleClose}
				></DialogTitle>
				<DialogContent
					dividers
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						color: "#008080",
						backgroundColor: "",
					}}
				>
					<h2>Welcome to</h2>

					<h1>exploriana Tour Pakistan</h1>
				</DialogContent>
			</Dialog>
		</div>
	);
}
