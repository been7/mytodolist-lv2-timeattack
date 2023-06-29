import React from "react";
import Header from "../components/ui/Header";
import Form from "../components/todos/Form";
import List from "../components/todos/List";
import styled from "styled-components";

function Home() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

const Layout = styled.div``;

export default Home;
