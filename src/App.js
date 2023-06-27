import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Button, Space } from 'antd';
import { Input } from 'antd';
import { Card, } from 'antd';




const { Content, Footer } = Layout;
const { Search } = Input;


  



const App: React.FC = () => {
   theme.useToken();

  return (
    <Layout className="layout">
      
      <Content  style={{ padding: '0 2px',  display: 'flex', alignItems: 'center',   }} >
        <Footer>MRV Consultas Tributárias</Footer>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Space wrap>
    
    <Button style={{left: '1299px'}}>Sing-up</Button>
    
  </Space>
      </Content>

      <Space direction="vertical" style={{margin: '50px'}}>
      <Search
      placeholder="Pesquise Aqui."
      enterButton="Searh"
      size="large"
    />
   

  </Space>

 <Space style={{textAlign: 'center'}}>
 <Card title="IRRF" bordered={false} style={{ width: 800 , margin: '70px' , height: '500px ' }}>
    <p style={{ textAlign: 'left'}}>Tributos</p>
    <p style={{ textAlign: 'left'}}>Aliquota: xxx</p>
    <p style={{ textAlign: 'left'}}>Valor: xxx</p>
  </Card>
  <Card title="IPRF" bordered={false} style={{ width: 800, height: '500px ' }}>
    <p style={{ textAlign: 'left'}}>Tributos</p>
    <p style={{ textAlign: 'left'}}>Aliquota: xxx</p>
    <p style={{ textAlign: 'left'}}>Valor: xxx</p>
  </Card>
 </Space>

 
 <Space style={{textAlign: 'center'}}>
 <Card title="IRRF" bordered={false} style={{ width: 800 , margin: '70px', height: '500px',  }}>
    <p style={{ textAlign: 'left'}}>Tributos</p>
    <p style={{ textAlign: 'left'}}>Aliquota: xxx</p>
    <p style={{ textAlign: 'left'}}>Valor: xxx</p>
  </Card>
  <Card title="IPRF" bordered={false} style={{ width: 800 , height: '500px '}}>
    <p style={{ textAlign: 'left'}}>Tributos</p>
    <p style={{ textAlign: 'left'}}>Aliquota: xxx</p>
    <p style={{ textAlign: 'left'}}>Valor: xxx</p>
  </Card>
 </Space>



    </Layout>
   
  );
  
  
};
export default App;
