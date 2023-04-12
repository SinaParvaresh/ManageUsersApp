import {
	Button,
	Container,
	Paper,
	Stack,
	TextInput,
	Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import ShowStudents from "./ShowStudents";

const Student = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [allStudents, setAllStudents] = useState([]);

    //Load Student Data on initial render
	useEffect(() => {
		const showStudents = async () => {
			const getStudents = await fetch("http://localhost:8080/student/getAll");
			const response = await getStudents.json();
			console.log(response);
			setAllStudents(response);
		};
		showStudents();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		const studentInfo = { name: name, address: address };
		addStudent(studentInfo);
	};

	const addStudent = async (studentInfo) => {
		const settings = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(studentInfo),
		};

		return await fetch("http://localhost:8080/student/add", settings);
	};

	return (
		<Container>
			<Paper shadow="md" p="md" withBorder>
				<Title m="md">Add Student</Title>
				<form onSubmit={submitHandler}>
					<Stack pb={10}>
						<TextInput
							placeholder="Student name"
							label="Student name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							withAsterisk
						/>
						<TextInput
							placeholder="Address"
							label="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							withAsterisk
						/>
					</Stack>

					<Button type="submit">Submit</Button>
				</form>
                <ShowStudents allStudents={allStudents}/>
			</Paper>
		</Container>
	);
};

export default Student;
