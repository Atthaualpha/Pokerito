import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '../../components/UI/BaseButton/BaseButton';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

import classes from './History.module.css';
const History = () => {
  let historyRooms = [{ id: 1, title: 'test', stories: 10, time: '00:00:00', points: 10 }];

  return (
    <div>
      <h1>Played Rooms</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.TableHead}>
            <TableRow>
              <TableCell className={classes.TableHeadCell}>Title</TableCell>
              <TableCell className={classes.TableHeadCell} align="right">
                Stories
              </TableCell>
              <TableCell className={classes.TableHeadCell} align="right">
                Time
              </TableCell>
              <TableCell className={classes.TableHeadCell} align="right">
                Points
              </TableCell>
              <TableCell className={classes.TableHeadCell} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell className={classes.TableRowCell} >{room.title}</TableCell>
                <TableCell className={classes.TableRowCell} align="right">{room.stories}</TableCell>
                <TableCell className={classes.TableRowCell} align="right">{room.time}</TableCell>
                <TableCell className={classes.TableRowCell} align="right">{room.points}</TableCell>
                <TableCell className={classes.TableRowCell} align="right">
                  <Button color="blank" unborder>
                    <PlayIcon />
                  </Button>
                  <Button color="blank" unborder>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default History;
