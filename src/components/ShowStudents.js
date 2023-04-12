import { ActionIcon, Container, Paper, Table } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const ShowStudents = ({ allStudents }) => {
	const currentStudents = allStudents.map((student, key) => {
		return (
			<tr key={key}>
				<td>{student.id}</td>
				<td>{student.name}</td>
				<td>{student.address}</td>
				<td>
					<ActionIcon color="red">
						<IconTrash size="1rem" stroke={1.5} />
					</ActionIcon>
				</td>
			</tr>
		);
	});

	return (
		<Container>
			<Paper m="md" withBorder shadow="md">
				<Table verticalSpacing="md" horizontalSpacing="md">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>{currentStudents}</tbody>
				</Table>
			</Paper>
		</Container>
	);
};

export default ShowStudents;
