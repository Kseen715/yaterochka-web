import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
    randomId,
} from '@mui/x-data-grid-generator';
import './TableView.css';

import { getData, getResp } from "./Service";
import { useEffect } from "react";
import axios from 'axios';

let json_link;
let csv_link;





function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const [access, setAccess] = React.useState(false);
    useEffect(() => {
        getAccess()
            .then(res => {
                setAccess(res);
            })
            .catch(err => console.error(err));
    }, []);

    if (access === false) {
        return <div>Загрузка...</div>;
    }
    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    let btnAdd = (<Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Добавить запись
    </Button>);

    let btnJSON = (<Button color="secondary" onClick={
        () => {
            window.location.href = json_link;
        }
    }>
        Выгрузить в JSON
    </Button>);

    let btnCSV = (<Button color="secondary" onClick={
        () => {
            window.location.href = csv_link;
        }
    }>
        Выгрузить в CSV
    </Button>);

    let btnLogin = (<Button color="primary" onClick={
        () => {
            window.location.href = 'http://localhost:8000/log/login/';
        }
    }>
        Логин
    </Button>);

    let btnLogout = (<Button color="primary" onClick={
        () => {
            window.location.href = 'http://localhost:8000/log/logout/';
        }
    }>
        Выйти
    </Button>);

    let none = (<div></div>);

    return (
        <GridToolbarContainer>
            {access === 'ERR_BAD_RESPONSE' ? btnAdd : none}
            <div style={
                {
                    marginLeft: 'auto',
                }
            }>
                {access === 'ERR_BAD_RESPONSE' ? btnJSON : none}
                {access === 'ERR_BAD_RESPONSE' ? btnCSV : none}
                {access === 'ERR_BAD_RESPONSE' ? btnLogout : btnLogin}
            </div>
        </GridToolbarContainer >
    );
}

function ConvertHashToInt(hash) {
    let res = 0;
    for (let i = 0; i < hash.length; i++) {
        res += hash.charCodeAt(i);
    }
    return res;
}

async function getAccess() {
    let status_resp = await getResp('user-status/');
    console.log(status_resp);
    return status_resp;
}

export default function TableV(columns, subURL) {
    const [rows, setRows] = React.useState([]);

    const [access, setAccess] = React.useState(false);

    useEffect(() => {
        json_link = 'http://localhost:8000/get-json-data/' + subURL + '/';
        csv_link = 'http://localhost:8000/get-csv-data/' + subURL + '/';
        getData(subURL)
            .then(res => {
                // console.log(res);
                setRows(res);
            })
            .catch(err => console.error(err));

    }, []); // Empty array means this effect runs once on component mount
    // const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});


    useEffect(() => {
        getAccess()
            .then(res => {
                setAccess(res);
            })
            .catch(err => console.error(err));
    }, []);

    if (access === false) {
        return <div>Загрузка...</div>;
    }

    //     ERR_BAD_RESPONSE = in
    //     ERR_BAD_REQUEST = out


    // if (status_resp === "\"ERR_BAD_RESPONSE\"") {
    //     access = true;
    // } else if (status_resp === "\"ERR_BAD_REQUEST\"") {
    //     access = false;
    // }
    console.log(access); // This will print the boolean value



    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    function getCookie(name) {
        const cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }

        return null;
    }

    const handleSaveClick = (id) => async () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));


        const response = axios({
            method: 'destroy',
            url: 'http://localhost:8000/' + subURL + '/' + id + '/',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            withCredentials: true
        });
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };



    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        console.log(updatedRow);
        let row = updatedRow

        const kal = {
            'sel/employee': {
                id: row.id,
                job: row.job,
                name: row.name,
                phone: row.phone,
                store_id: row.store_id
            },
            'sel/group': {
                id: row.id,
                type: row.type,
                number: row.number,
                product_id: row.product_id,
                store_id: row.store_id
            },
            'sel/store': {
                id: row.id,
                store_name: row.store_name,
                city: row.city,
                address: row.address,
                phone: row.phone
            },
            'sel/check': {
                id: row.id,
                date: row.date,
                time: row.time,
                total: row.total,
                product_group_id: row.product_group_id,
                store_id: row.store_id,
                number_sold_group: row.number_sold_group
            },
            'sel/goods': {
                id: row.id,
                expiration_date: row.expiration_date,
                price: row.price,
            }
        }

        const kal2 = {
            'sel/employee': {
                id: ConvertHashToInt(row.id),
                job: row.job,
                name: row.name,
                phone: row.phone,
                store_id: row.store_id
            },
            'sel/group': {
                id: ConvertHashToInt(row.id),
                type: row.type,
                number: row.number,
                product_id: row.product_id,
                store_id: row.store_id
            },
            'sel/store': {
                id: ConvertHashToInt(row.id),
                store_name: row.store_name,
                city: row.city,
                address: row.address,
                phone: row.phone
            },
            'sel/check': {
                id: ConvertHashToInt(row.id),
                date: row.date,
                time: row.time,
                total: row.total,
                product_group_id: row.product_group_id,
                store_id: row.store_id,
                number_sold_group: row.number_sold_group
            },
            'sel/goods': {
                id: ConvertHashToInt(row.id),
                expiration_date: row.expiration_date,
                price: row.price,
            }
        }

        let response;
        if (!row.isNew && !isNaN(row.id)) {
            response = axios({
                method: 'update',
                url: 'http://localhost:8000/' + subURL + '/' + row.id + '/',
                data: kal[subURL],
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                withCredentials: true
            });
        } else {
            response = axios({
                method: 'post',
                url: 'http://localhost:8000/' + subURL + '/',
                data: kal2[subURL],
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                withCredentials: true
            });
        }

        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns_end = [
        {
            field: 'actions',
            type: 'actions',
            headerName: '',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        // <GridActionsCellItem
                        //     icon={<SaveIcon />}
                        //     label="Сохранить"
                        //     sx={{
                        //         color: 'primary.main',
                        //     }}
                        //     onClick={handleSaveClick(id)}
                        // />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Отменить"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                if (access !== 'ERR_BAD_RESPONSE') {
                    return [];
                }

                return [
                    // <GridActionsCellItem
                    //     icon={<EditIcon />}
                    //     label="Изменить запись"
                    //     className="textPrimary"
                    //     onClick={handleEditClick(id)}
                    //     color="inherit"
                    // />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Удалить запись"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    columns = columns.concat(columns_end);

    let editMode;

    if (access === 'ERR_BAD_RESPONSE') {
        editMode = 'row';
    } else {
        editMode = 'none';
    }


    return (
        <Box className="table-v-box">
            <DataGrid
                className="table-v-grid"
                rows={rows}
                columns={columns}
                editMode={editMode}
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                    toolbar: EditToolbar,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </Box>
    );
}
