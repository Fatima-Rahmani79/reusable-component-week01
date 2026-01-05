// This component allows to add data dynamically in each row of table.
export default function TableRow({ name, age, phone, email }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}
