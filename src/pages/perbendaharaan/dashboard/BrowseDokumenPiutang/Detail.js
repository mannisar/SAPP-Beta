import { React, Card, Table} from '../../libraries/dependencies'


export default function Detail() {
    const data = [
        {
            judul: 'Kantor Penerbit',
            nilai: '009000 - Direktorat Informasi Kepabeanan dan Cukai'
        }, {
            judul: 'Kantor Monitor',
            nilai: '050900 - KPPBC TMP A Bekasi'
        }, {
            judul: 'Dokumen',
            nilai: 'SPTNP'
        },
        {
            judul: 'Tanggal Jatuh Tempo',
            nilai: '16/09/2020'
        },
        {
            judul: 'Tanggal Lunas',
            nilai: null
        },
        {
            judul: 'Dokumen Asal',
            nilai: 'PIB - NOMOR 025896 Tanggal 14/07/2020'
        },
        {
            judul: 'Perusahaan',
            nilai: '12345678912345 - PT Testing Indonesia'
        },
        {
            judul: 'Alamat Perusahaan',
            nilai: 'Jalan Alamat PT Tesing Indonesia'
        },
        {
            judul: 'PPJK',
            nilai: null
        },
        {
            judul: 'Petugas',
            nilai: '198989504523548987 - Andhika Kusuma'
        },
        {
            judul: 'Keterangan',
            nilai: 'Penetapan Dokumen Impor Karena Kesalahan tarif'
        }
    ]




    const columns = [
        {
            title: 'Judul',
            dataIndex: 'judul',
            key: 'judul',
        }, {
            title: 'Nilai',
            dataIndex: 'nilai',
            key: 'nilai',
        }
    ]
    return (
        <Card>
            <h2>Detail</h2>
            <Table dataSource={data} pagination={false} showHeader={false} columns={columns} size='small'/>
        </Card>
    )
}