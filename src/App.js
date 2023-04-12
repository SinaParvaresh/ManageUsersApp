import { MantineProvider } from "@mantine/core";
import "./App.css";
import { AppBar } from "./components/Appbar";
import Student from "./components/Student";

function App() {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme: "light",
				shadows: {
					md: "1px 1px 3px rgba(0, 0, 0, .25)",
					xl: "5px 5px 3px rgba(0, 0, 0, .25)",
				},

				headings: {
					fontFamily: "Roboto, sans-serif",
					sizes: {
						h1: { fontSize: "2rem" },
					},
				},
			}}>
			<AppBar />
			<Student />
		</MantineProvider>
	);
}

export default App;
