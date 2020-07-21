import {
  React,
  useState,
  Table,
  Layout,
  Row,
  Button,
  Modal,
  Col,
  Card,
} from "../../libraries/dependencies";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CetakDokumen from "./CetakDokumen";
import Pungutan from "./Pungutan";
import Detail from "./Detail";
import Timeline from "./Timeline";
import History from "./History";
import MutasiDokumen from "./MutasiDokumen";
// const { Content } = Layout
import Header from "../../header";

export default function BrowseDokumenPiutang() {
  const [showModal, setModal] = useState(false);
  const [contentModal, setContent] = useState("");

  function handleLihat(record) {
    return `${record.jenis_dokumen}-${record.no_dokumen}`;
  }

  const columns = [
    {
      title: "No Surat Paksa",
      dataIndex: "no_surat_paksa",
      sorter: (a, b) => a.no_surat_paksa.length - b.no_surat_paksa.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tgl Surat Paksa",
      dataIndex: "tgl_surat_paksa",
      sorter: (a, b) => a.tgl_surat_paksa - b.tgl_surat_paksa,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Jatuh Tempo",
      dataIndex: "jatuh_tempo",
      sorter: (a, b) => a.jatuh_tempo.length - b.jatuh_tempo.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tgl Lunas",
      dataIndex: "tgl_lunas",
      sorter: (a, b) => a.tgl_lunas.length - b.tgl_lunas.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Jns Dok",
      dataIndex: "jenis_dokumen",
      sorter: (a, b) => a.jenis_dokumen.length - b.jenis_dokumen.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "No Dok",
      dataIndex: "no_dokumen",
      sorter: (a, b) => a.no_dokumen.length - b.no_dokumen.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tgl Dok",
      dataIndex: "tgl_dokumen",
      sorter: (a, b) => a.tgl_dokumen.length - b.tgl_dokumen.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "NPWP",
      dataIndex: "npwp",
      sorter: (a, b) => a.npwp.length - b.npwp.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Nama Importir",
      dataIndex: "nama_importir",
      sorter: (a, b) => a.nama_importir.length - b.nama_importir.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Penerbit",
      dataIndex: "penerbit",
      sorter: (a, b) => a.penerbit.length - b.penerbit.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "operation",
      width: 100,
      fixed: "right",
      render: (text, record) => (
        // <Button onClick={() => handleLihat(record)}>Cetak</Button>
        <PDFDownloadLink
          document={<CetakDokumen data={record} />}
          fileName={record.jenis_dokumen}
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a",
          }}
        >
          Cetak
        </PDFDownloadLink>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      no_surat_paksa: "000001",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000001",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "TOKO UD. SARMA",
      penerbit: "011100",
    },
    {
      key: "2",
      no_surat_paksa: "000002",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000002",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "PT Importan Nusantara",
      penerbit: "011100",
    },
    {
      key: "3",
      no_surat_paksa: "000003",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000003",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "PT Selalu Benar",
      penerbit: "011100",
    },
    {
      key: "4",
      no_surat_paksa: "000004",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000004",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "PT Angin Ribut",
      penerbit: "011100",
    },
    {
      key: "5",
      no_surat_paksa: "000005",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000005",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "PT Lalu Lalang",
      penerbit: "011100",
    },
    {
      key: "6",
      no_surat_paksa: "000006",
      tgl_surat_paksa: "11-Mar-2020",
      jatuh_tempo: "13-03-2020",
      tgl_lunas: "",
      jenis_dokumen: "STCK-1",
      no_dokumen: "000006",
      tgl_dokumen: "17-Des-2019",
      status: "Surat Paksa",
      npwp: "62.592.680.1-019.00",
      nama_importir: "PT Masukin Barang",
      penerbit: "011100",
    },
  ];
  return (
    <Layout>
      <Header />
      <Modal
        title={contentModal.jenis_dokumen}
        visible={showModal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <p>No Surat: {contentModal.no_surat_paksa}</p>
        <p>Tanggal Surat: {contentModal.tgl_surat_paksa}</p>
        <p>Jatuh Tempo: {contentModal.jatuh_tempo}</p>
        <p>Tanggal Lunas: {contentModal.tgl_lunas}</p>
        <p>Jenis Dokumen: {contentModal.jenis_dokumen}</p>
        <p>No Dokumen: {contentModal.no_dokumen}</p>
        <p>Tanggal Dokumen: {contentModal.tgl_dokumen}</p>
        <p>Status: {contentModal.status}</p>
        <p>NPWP: {contentModal.npwp}</p>
        <p>Nama Importir: {contentModal.nama_importir}</p>
        <p>Penerbit: {contentModal.penerbit}</p>
      </Modal>
      <Row justify="center">
        <Col span={24}>
          <Card>
            <h3>BROWSE DOKUMEN PIUTANG</h3>
            <Table
              columns={columns}
              dataSource={data}
              size="small"
              pagination={5}
              scroll={{ x: 1500 }}
            />
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ marginTop: "10px" }}>
          <Timeline />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col span={11} style={{ marginRight: "5px" }}>
          <Detail />
        </Col>
        <Col span={11}>
          <Pungutan />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col span={11}>
          <MutasiDokumen />
        </Col>
        <Col span={11}>
          <History />
        </Col>
      </Row>
    </Layout>
  );
}
