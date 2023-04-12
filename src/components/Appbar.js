import { useState } from "react";
import {
	createStyles,
	Header,
	Anchor,
	Group,
	rem,
	Button,
	Box,
	Title,
} from "@mantine/core";

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
	header: {
		backgroundColor: theme.fn.variant({
			variant: "filled",
			color: theme.primaryColor,
		}).background,
		borderBottom: 0,
	},

	inner: {
		height: HEADER_HEIGHT,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	links: {
		paddingTop: theme.spacing.lg,
		height: HEADER_HEIGHT,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		textTransform: "uppercase",
		fontSize: rem(13),
		color: theme.white,
		padding: `${rem(7)} ${theme.spacing.sm}`,
		fontWeight: 700,
		borderBottom: `${rem(2)} solid transparent`,
		transition: "border-color 100ms ease, opacity 100ms ease",
		opacity: 0.9,
		borderTopRightRadius: theme.radius.sm,
		borderTopLeftRadius: theme.radius.sm,

		"&:hover": {
			opacity: 1,
			textDecoration: "none",
		},
	},

	secondaryLink: {
		color: theme.colors[theme.primaryColor][0],
		fontSize: theme.fontSizes.xs,
		textTransform: "uppercase",
		transition: "color 100ms ease",

		"&:hover": {
			color: theme.white,
			textDecoration: "none",
		},
	},

	mainLinkActive: {
		color: theme.white,
		opacity: 1,
		borderBottomColor:
			theme.colorScheme === "dark"
				? theme.white
				: theme.colors[theme.primaryColor][5],
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({ variant: "filled", color: theme.primaryColor })
				.background,
			0.1
		),
	},
}));

const mainLinks = [
	{
		link: "#",
		label: "Book a demo",
	},
];
export function AppBar() {
	const { classes, theme, cx } = useStyles();
	const [active, setActive] = useState(0);

	const mainItems = mainLinks.map((item, index) => (
		<Anchor
			href={item.link}
			key={item.label}
			className={cx(classes.mainLink, {
				[classes.mainLinkActive]: index === active,
			})}
			onClick={(event) => {
				event.preventDefault();
				setActive(index);
			}}>
			{item.label}
		</Anchor>
	));

	return (
		<Box pb={120}>
			<Header height={HEADER_HEIGHT} mb={120} className={classes.header}>
				<Group grow="apart" sx={{ height: "100%" }}>
					<Title color={theme.white}>Spring Boot React App</Title>
					<div className={classes.links}>
						<Group spacing={0} className={classes.mainLinks}>
							{mainItems}
						</Group>
					</div>

					<Group position="center" pb="xl" px="md">
						<Button variant="default">Log in</Button>
						<Button>Sign up</Button>
					</Group>
				</Group>
			</Header>
		</Box>
	);
}
