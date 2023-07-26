import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './table.css';

function createData(Productname, Trackingid, Date, Status) {
  return { Productname, Trackingid, Date, Status };
}

export default function BasicTable() {
  const [rows, setRows] = useState([
    createData('Hp-laptop', 159234, "22 july 2023", "Approved"),
    createData('Hp-laptop', 159234, "22 july 2023", "pending"),
    createData('Hp-laptop', 159234, "22 july 2023", "delivered"),
    createData('Hp scanner', 159234, "22 july 2023", "Approved"),
    createData('Hp scanner', 159234, "22 july 2023", "pending"),
    createData('Hp scanner', 159234, "22 july 2023", "delivered"),
  ]);

  const [editingRow, setEditingRow] = useState(null);

  const useStyles = (Status) => {
    if (Status === 'Approved') {
      return {
        background: 'orange',
        color: 'white',
      };
    } else if (Status === 'pending') {
      return {
        background: 'red',
        color: 'white',
      };
    } else {
      return {
        background: 'green',
        color: 'white',
      };
    }
  };

  const handleStatusUpdate = async (index, newStatus) => {
    try {
      const updatedRow = { ...rows[index], Status: newStatus };
      const response = await axios.put(`http://localhost:3000/orders/updateStatus/${rows[index].Trackingid}`, updatedRow);
      if (response.status === 200) {
        setRows((prevRows) => {
          const updatedRows = [...prevRows];
          updatedRows[index].Status = newStatus;
          return updatedRows;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditRow = (index) => {
    setEditingRow(index);
  };

  const handleSaveRow = async (index) => {
    try {
      const updatedRow = { ...rows[index] };
      const response = await axios.put(`http://localhost:3000/orders/update/${rows[index].Trackingid}`, updatedRow);
      if (response.status === 200) {
        setEditingRow(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table">
      <h3>recent orders</h3>

      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px blue ' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Productname</TableCell>
              <TableCell align="right">Tracking id</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {editingRow === index ? (
                    <input
                      type="text"
                      value={row.Productname}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].Productname = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  ) : (
                    row.Productname
                  )}
                </TableCell>
                <TableCell align="right">{editingRow === index ? (
                    <input
                      type="number"
                      value={row.Trackingid}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].Trackingid = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  ) : (
                    row.Trackingid
                  )}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">
                  <span className='status' style={useStyles(row.Status)}>
                    {editingRow === index ? (
                      <select
                        value={row.Status}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].Status = e.target.value;
                          setRows(updatedRows);
                        }}
                      >
                        <option value="Approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    ) : (
                      row.Status
                    )}
                  </span>
                </TableCell>
                <TableCell align="right" className='details'>
                  {editingRow === index ? (
                    <>
                      <button onClick={() => handleSaveRow(index)}>Save</button>
                      <button onClick={() => setEditingRow(null)}>Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => handleEditRow(index)}>Edit</button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
