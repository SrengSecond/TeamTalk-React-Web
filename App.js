import React,{useState,Component} from 'react'
import Layout from "./BurgerBuilder/components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
import './App.css'



class App extends Component
{
    render()
    {
        return(
            <div className="hoc">
                {/*<Layout>
                    <BurgerBuilder/>
                </Layout>*/}

                <nav>
                    <div className="logo">TeamTalk.</div>
                    <ul className="nav-links">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Community</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                        <li>
                            <a href="">Join Us</a>
                        </li>
                    </ul>
                    <i className="fas fa-bars more-button">
                    </i>
                </nav>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolore eius id labore nobis qui quibusdam ratione, rerum sit soluta suscipit? A doloribus eaque itaque nemo nisi saepe? Esse facere itaque provident quas ullam? Atque consectetur cum cupiditate deserunt hic iusto laborum libero neque, quisquam sequi tenetur ut vitae. Esse illo perspiciatis quos suscipit! At culpa deserunt, dignissimos eum illo ipsam libero, magni nihil nostrum odio optio praesentium reiciendis, sapiente sed voluptatibus? A architecto consectetur, culpa est excepturi facilis harum illo, molestiae molestias, obcaecati possimus quasi qui recusandae sit tempore velit veniam voluptas? Adipisci amet earum eos incidunt iure minima nam non odio quidem quo, repellat saepe sed similique, sunt unde veniam voluptas. Adipisci autem commodi, corporis cumque cupiditate debitis deleniti dolorum ea est ex ipsa ipsam ipsum iure laborum minima modi natus neque non nulla odio perspiciatis porro praesentium quidem quo ratione reiciendis repellat repellendus tempora tenetur totam veniam vero voluptate voluptatum. Ad architecto aspernatur at et incidunt ipsum labore, laudantium magnam, nobis quisquam quod tempora unde, veritatis voluptas voluptatum! Atque, beatae delectus doloribus earum enim esse exercitationem fugiat ipsum iure magnam neque nihil numquam, odio officiis possimus provident quia, reprehenderit. Beatae cumque doloremque modi, molestias praesentium similique ut veritatis voluptates. Aliquam consequuntur dignissimos, ducimus earum expedita explicabo illo inventore itaque laudantium nostrum omnis optio perferendis porro quam quibusdam quis recusandae repellendus sint unde voluptatibus? A, architecto delectus deleniti expedita iste itaque iure labore mollitia officia, omnis qui, sint velit! Ad adipisci alias dignissimos, eius exercitationem illo illum modi mollitia, necessitatibus neque quaerat, saepe tempora ullam! Aliquam et illo magnam minus mollitia pariatur porro, possimus saepe ut vel! A, ab atque commodi dicta distinctio dolores ducimus est et excepturi fugiat id, impedit magni minus nemo numquam omnis perspiciatis quaerat quasi quidem quo reprehenderit veritatis voluptatibus? Aliquid animi, architecto aspernatur atque, consequatur dolore eligendi excepturi fugit illum maxime modi quaerat quia rerum sed sint voluptatem voluptatum. Alias autem commodi consequatur ea earum error, esse, et exercitationem id iure laudantium natus non nostrum nulla quia quo similique sunt tempora, totam voluptas. A accusamus adipisci amet commodi consectetur, cum delectus dolorum ea eligendi esse et exercitationem in laudantium magni minus molestias nemo officiis perspiciatis provident quae quaerat qui rem reprehenderit sint tenetur unde, veniam voluptatum? Quod, sequi sunt. Adipisci beatae corporis deserunt dicta eaque error ex explicabo, incidunt labore nobis quia quidem recusandae reiciendis saepe sapiente temporibus voluptate? Atque cupiditate iste omnis possimus quia sequi voluptas? A numquam odio pariatur quaerat reprehenderit tempore vel. Architecto corporis dignissimos iure nemo nulla sed temporibus veniam. Ad, alias aspernatur dolore id itaque perferendis quod sunt. Accusamus ad architecto, atque, error hic laborum magni nemo nisi nobis possimus quia, quibusdam unde! Deserunt doloremque dolores, facere facilis incidunt, iste iusto non quae quibusdam quos ratione sequi similique voluptatem. Atque commodi corporis cum debitis dignissimos doloribus dolorum earum enim expedita fuga in incidunt iste, iusto labore laborum nam numquam pariatur porro possimus quisquam, recusandae reiciendis rem repellat sed voluptatem. Dignissimos magni sed voluptatem? Aliquid amet at, commodi consequatur corporis dicta dolores doloribus ducimus eaque eum fuga illum inventore iusto labore magni modi nihil non numquam quae quas quasi ratione, repellendus repudiandae voluptatem voluptatibus! Amet aut id maxime nulla numquam. Adipisci alias aliquam aliquid amet animi asperiores corporis, cum deserunt eaque, est et facere fuga fugit illum impedit in inventore magni molestiae pariatur perferendis possimus quo repudiandae, similique tempore voluptas voluptatem voluptates! Accusantium aliquid cumque, dignissimos dolorum eligendi necessitatibus nemo tempore vel veniam? Ab adipisci aliquid architecto assumenda aut corporis magnam obcaecati reiciendis tempore. Ab aliquid animi aspernatur, autem beatae blanditiis consequuntur corporis delectus dolor dolorem dolores eius et explicabo facere fugiat id impedit incidunt inventore iste maxime nisi non numquam officiis perspiciatis porro praesentium quas quod, ratione, repellendus voluptatem? Alias architecto dolorem excepturi libero quas? Autem cupiditate ea eius eligendi esse et eum, exercitationem explicabo fuga impedit ipsa libero, nisi numquam perferendis provident quod rem, reprehenderit rerum sint vitae. Excepturi temporibus tenetur velit? Dignissimos libero odit perferendis ratione saepe ullam ut veniam vitae voluptas. Ab accusantium alias aut blanditiis consequatur, consequuntur dicta dolorem ducimus earum eos eveniet fugiat, illum, inventore labore minima nemo obcaecati porro quia sint veniam! A accusamus, adipisci animi asperiores aut cum cumque debitis deserunt dolorem dolores eius, enim esse est harum hic impedit inventore laboriosam magnam maiores molestiae nihil officiis pariatur perferendis porro reiciendis temporibus ut vel? A aut blanditiis delectus deleniti dolores eius, eum facere incidunt minima nemo neque, nihil repudiandae sint sit temporibus ullam voluptas voluptatem. Dicta esse eum facere, harum hic magni repellendus sit sunt unde voluptates. Aliquam cumque debitis deserunt esse iusto magnam, mollitia quidem rerum saepe vitae! A accusamus consequatur deleniti dolores ea esse et eveniet excepturi facilis fugiat harum molestias nisi officiis perspiciatis porro provident quaerat quasi, quo reiciendis repudiandae rerum saepe sequi suscipit vitae voluptatibus! Alias, animi blanditiis consequatur cupiditate distinctio eaque earum eius esse ex exercitationem laboriosam libero magnam, nesciunt odio placeat possimus provident quisquam recusandae repellat rerum soluta, tempore temporibus vero? A aliquam assumenda blanditiis consequuntur cumque earum eos est et exercitationem fugit ipsam iusto libero maiores, maxime numquam odio, odit pariatur perferendis placeat porro quam quo reiciendis repudiandae sunt temporibus vitae voluptates. Id minus, sint. Beatae dignissimos distinctio, ipsam ipsum iste itaque iure iusto laudantium, necessitatibus, quam quasi quo rem repellat temporibus voluptatum. Aliquam consequuntur esse, excepturi ipsum neque nostrum quisquam quos sed, sequi sint, tempore ut veniam! Alias deserunt dolorem eum inventore itaque minima minus non, perspiciatis quam quod recusandae, repellat repudiandae unde? Accusantium aperiam blanditiis eveniet fugit illum in, magnam modi nihil nobis quasi, quibusdam quisquam suscipit voluptates? Ad aliquid, animi blanditiis consequatur cupiditate dolor dolore earum error fugit, ipsam ipsum laboriosam nostrum nulla placeat quo unde ut? Accusantium alias aliquam architecto atque exercitationem expedita iusto molestias neque nostrum officiis, quo reprehenderit vitae. Alias aliquam architecto atque aut blanditiis commodi, consequatur, cupiditate ducimus illum nesciunt non nostrum provident sunt tempore voluptas? Amet, asperiores est expedita impedit magni minima officiis vero. A consequatur magnam numquam? Debitis dignissimos distinctio doloremque necessitatibus nihil vitae!
                </div>
            </div>
        )
    }

}
export default App;