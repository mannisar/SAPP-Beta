import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'No Surat Paksa',
        dataIndex: 'no_surat_paksa',
        sorter: (a, b) => a.no_surat_paksa.length - b.no_surat_paksa.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Tgl Surat Paksa',
        dataIndex: 'tgl_surat_paksa',
        sorter: (a, b) => a.tgl_surat_paksa - b.tgl_surat_paksa,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Jatuh Tempo',
        dataIndex: 'jatuh_tempo',
        sorter: (a, b) => a.jatuh_tempo.length - b.jatuh_tempo.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Tgl Lunas',
        dataIndex: 'tgl_lunas',
        sorter: (a, b) => a.tgl_lunas.length - b.tgl_lunas.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Jns Dok',
        dataIndex: 'jenis_dokumen',
        sorter: (a, b) => a.jenis_dokumen.length - b.jenis_dokumen.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'No Dok',
        dataIndex: 'no_dokumen',
        sorter: (a, b) => a.no_dokumen.length - b.no_dokumen.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Tgl Dok',
        dataIndex: 'tgl_dokumen',
        sorter: (a, b) => a.tgl_dokumen.length - b.tgl_dokumen.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Status',
        dataIndex: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'NPWP',
        dataIndex: 'npwp',
        sorter: (a, b) => a.npwp.length - b.npwp.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Nama Importir',
        dataIndex: 'nama_importir',
        sorter: (a, b) => a.nama_importir.length - b.nama_importir.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Penerbit',
        dataIndex: 'penerbit',
        sorter: (a, b) => a.penerbit.length - b.penerbit.length,
        sortDirections: ['descend', 'ascend'],
    },
];

const data = [
    {
        key: '1',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
    {
        key: '2',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
    {
        key: '3',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
    {
        key: '4',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
    {
        key: '5',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
    {
        key: '6',
        no_surat_paksa: '000001',
        tgl_surat_paksa: '11-Mar-2020',
        jatuh_tempo: '13-03-2020',
        tgl_lunas: '',
        jenis_dokumen: 'STCK-1',
        no_dokumen: '000001',
        tgl_dokumen: '17-Des-2019',
        status: 'Surat Paksa',
        npwp: '62.592.680.1-019.00',
        nama_importir: 'TOKO UD. SARMA',
        penerbit: '011100'
    },
];

function BrowseDokumenPiutang() {
    return (
        <Table columns={columns} dataSource={data} size="small" scroll={{ x: 1500 }} />
    );
}

export default BrowseDokumenPiutang;