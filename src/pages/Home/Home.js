/** @format */

import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles["blog_container"]}>
        <h1>Space Travel: Taking you Beyond the Horizon</h1>
      </div>

      <div className={styles["blog_container"]}>
        <h3>🤖 Make Your Own Dream Machine</h3>
        <p>
          We have developed a design tool that will take all the stress out of
          the building process. We have a fully automated staff ready to build
          at a moments notice. They just need your input to get started.{" "}
          <sub>
            <small>
              **While design might take only moments please allow for upto 222
              years due to back catalog**
            </small>
          </sub>
        </p>
      </div>

      <div className={styles["blog_container"]}>
        <h3>🚀 Check Out Our Catalog Of Carefully Constructed Crafts</h3>
        <p>
          You can choose from any of our amazing vehicles already in service. We
          have options for every journey. Just ask the band, Journey! We have
          the unique experience of being able to provide all User designed
          craft.{" "}
          <sub>
            <small>
              **User created craft absolve us of any liability from malfunctions
              due to user design**
            </small>
          </sub>
        </p>
      </div>

      <div className={styles["blog_container"]}>
        <h3>🪐 Look at Our List of Destinations</h3>
        <p>
          You are in charge here. No set flight times means leave when you
          decide, just a couple of clicks and the auto pilot will take care of
          the rest. We are ready to take you to exotic locations for you to
          fully explore.{" "}
          <sub>
            <small>
              **Be adivised: due to hostile surface conditions of certain
              locations, (such as not having a surface) do not exit the craft to
              explore.**
            </small>
          </sub>
        </p>
      </div>

      <div className={styles["blog_container"]}>
        <h3>💣 We Recyle</h3>
        <p>
          Feel free upon finishing your journey to either leave your crafted
          spacecraft for others to enjoy. Or chose to destroy your malfuncioning
          master piece. Our collection bots are ready to take the scrape and
          melt it down to reuse for the next build.{" "}
          <sub>
            <small>
              **Collection bots ar only authorized to collect scrap. In the
              event of an occupied spacecraft "recyle" your family will be
              resposible for persons collecting.**
            </small>
          </sub>
        </p>
      </div>
    </div>
  );
}

export default Home;
