import services from '../data/services.js';

function StatusTable() {
  return (
    <>
      <table className='status-table'>
        <thead>
          <tr>
            <th>SERVICE</th>
            <th>METRICS</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
            {services.map((row, index) =>(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.metrics}</td>
                    <td>
                        <span className={`status-cell status-${row.status.toLowerCase().replace(" ", "-")}`}>
                            <span className="status-indicator"></span>
                            {row.status}
                        </span>
                        
                    </td>
                    <td><a href="#">View Logs</a></td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default StatusTable;
