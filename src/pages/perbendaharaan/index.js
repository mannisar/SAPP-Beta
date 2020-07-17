import { React, Layout } from './libraries/dependencies';
import { BrowseDokumenPiutang } from './dashboard';

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
                        
                        <BrowseDokumenPiutang />
                    </Content>
                </Layout>
                <Layout className="site-layout-background" style={{ padding: '24px' }}>
                    <Content style={{ minHeight: 280 }}>
                        <h3>TABLE FOOTER</h3>
                    </Content>
                </Layout>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    );
}

export default Perbendaharaan;