export default function Table({ title, children }) {
  return (
    <table>
      <thead>
        <tr  className="caption">
          <th colSpan={4}>{title}</th>     
        </tr>
        <tr>        
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
