import { React, Layout } from './libraries/dependencies';
import { BrowseDokumenPiutang, RekamDokumenPiutang } from './dashboard';
import Head from './header';
const { Header, Content } = Layout;


function Perbendaharaan() {
    return (
        <Layout>
            <Header className="header">
                <h1 style={{ color: 'white' }}>CEISA 4.0 II</h1>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 50 }}>
                <Layout className="site-layout-background" style={{ padding: '24px' }}>
                    <Content style={{ minHeight: 280 }}>
                        <h3>BROWSE DOKUMEN PIUTANG</h3>
                        <Head />
                        <BrowseDokumenPiutang />
                        {/* <RekamDokumenPiutang /> */}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
}

export default Perbendaharaan;