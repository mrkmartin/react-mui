import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Izzy',
    last_name: 'Gaye',
    email: 'igaye0@yolasite.com',
    gender: 'Male',
    ip_address: '2.185.215.217',
  },
  {
    id: 2,
    first_name: 'Prisca',
    last_name: 'Zannotti',
    email: 'pzannotti1@guardian.co.uk',
    gender: 'Female',
    ip_address: '137.106.252.204',
  },
  {
    id: 3,
    first_name: 'Boniface',
    last_name: 'Durning',
    email: 'bdurning2@shutterfly.com',
    gender: 'Male',
    ip_address: '70.83.39.180',
  },
  {
    id: 4,
    first_name: 'Sibby',
    last_name: 'Gabbatt',
    email: 'sgabbatt3@irs.gov',
    gender: 'Bigender',
    ip_address: '122.2.185.134',
  },
  {
    id: 5,
    first_name: 'Alano',
    last_name: "O'Dowgaine",
    email: 'aodowgaine4@amazon.co.uk',
    gender: 'Male',
    ip_address: '38.224.60.87',
  },
  {
    id: 6,
    first_name: 'Garnette',
    last_name: 'Parsell',
    email: 'gparsell5@histats.com',
    gender: 'Female',
    ip_address: '107.103.125.148',
  },
  {
    id: 7,
    first_name: 'Shea',
    last_name: 'McCafferty',
    email: 'smccafferty6@simplemachines.org',
    gender: 'Male',
    ip_address: '20.231.38.204',
  },
  {
    id: 8,
    first_name: 'Devi',
    last_name: 'Pynner',
    email: 'dpynner7@twitpic.com',
    gender: 'Female',
    ip_address: '63.189.158.207',
  },
  {
    id: 9,
    first_name: 'Corinna',
    last_name: 'Batisse',
    email: 'cbatisse8@jalbum.net',
    gender: 'Female',
    ip_address: '88.216.62.128',
  },
  {
    id: 10,
    first_name: 'Brendon',
    last_name: 'Bertolin',
    email: 'bbertolin9@arizona.edu',
    gender: 'Male',
    ip_address: '64.199.128.35',
  },
];
