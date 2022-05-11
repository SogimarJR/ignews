import styles from "./home.module.scss";
import Head from "next/head";
import { SubscribeButton } from "../components/subscribe/SubscribeButton";

const url =
  "https://apib2b.agrocrm.dev.br/v01/itens/itenspromocao?Pagesize=20&Pagenumber=1&Promotipoid=2&Clientesid=81409948000105&GruposId=0&CategProdId=0&SubcategId=0";
const token =
  "20104af9-e21f-4d2f-b158-764f23f90ac4!51aec1b01d1c4dbbe177f4329fa88b5f537fa79f7597b99404c14b3602c3134de4bd8b35c948da";
const header = new Headers();
header.append("Authorization", `Bearer ${token}`);

export async function getServerSideProps({ req, res }) {
  const request = await fetch(url, {
    method: "GET",
    headers: header,
  });
  const data = await request.json();

  return { props: { products: data } };
}

export default function Home({ products }) {
  console.log(products);

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
