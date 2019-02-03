import React, {Component} from 'react';
import makeData from './data/personalData';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Datatable extends Component{
    constructor(){
        super();

        this.state = {
            data: makeData(550),
        }
    }

    render(){
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={
                        [
                            {
                                Header: 'Información Personal',
                                columns: [
                                    {
                                        Header: 'Nombre',
                                        accessor: 'name',
                                        Cell: {
                                            style: { background: 'red'}
                                        }
                                    },
                                    {
                                        Header: 'Apellido',
                                        accessor: 'lastName'
                                    }
                                ]
                            },
                            {
                                Header: 'Información Laboral',
                                columns: [
                                    {
                                        Header: 'Empresa',
                                        accessor: 'company'
                                    },
                                    {
                                        Header: 'Cargo',
                                        accessor: 'position'
                                    },
                                    {
                                        Header: 'Salario',
                                        accessor: 'salary',
                                        getProps: (state, rowInfo, column, instance) => {
                                            
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                    defaultPageSize={10}
                    className='-striped -highlight'
                    previousText= 'Anterior'
                    nextText= 'Siguiente'
                    pageTegxt='Pág.'
                    ofText='de'
                    rowsText=''
                    getTrProps={(state, rowInfo) => {
                        return {
                            onClick: (e) => {
                                
                            }
                        }
                        
                    }}
                >

                </ReactTable>
            </div>
        )
    }
}

export default Datatable;