import React,{useEffect,useState} from "react";
import '../Router_style/Shop.css'

function Shop()
{
    useEffect( () =>
        {
            fetchItem()
        },[])

    const [planets,setPlannet] = useState([])

    const fetchItem = async () =>
    {
        const data = await fetch (
            'http://swapi.dev/api/planets/');
        const planets = await data.json();
        setPlannet(planets.results);
        /*planets.results.map( planet => ( console.log(planet.name)));*/
        console.log(planets);
    }

    return(
        <div className="shop">
            {/*<h1>Shop Page</h1>*/}
            <h3>Shop list</h3>
            {/*<div className={"shop-planetGrid"}>

                {planets.map(planet => (
                        <div key={planet.url}>{planet.name}</div>
                    ))}
            </div>*/}
{/*
            <div className={"shop_gridContainer"}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at consectetur distinctio ex excepturi, exercitationem id maiores modi necessitatibus nostrum optio praesentium quo repellat sunt suscipit vero. Accusantium architecto atque, dignissimos distinctio doloremque id ipsa ipsam iste iure labore laborum nemo nisi numquam perferendis perspiciatis quam quas quis quod repellendus reprehenderit repudiandae rerum suscipit ullam unde vel veniam voluptas voluptatem! Accusantium amet at corporis dignissimos dolorem ea eius eum facilis iste laudantium maxime nihil nobis pariatur, perspiciatis placeat, quae quis reprehenderit sapiente, ullam vitae? Amet autem delectus dolorem dolorum id maxime natus nobis porro possimus quasi reiciendis unde, voluptate.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto asperiores corporis deserunt eaque nobis officia pariatur quia sed sit ullam, vitae voluptate! Eveniet ipsa qui quibusdam quod! Dolorum, minus?</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto asperiores corporis deserunt eaque nobis officia pariatur quia sed sit ullam, vitae voluptate! Eveniet ipsa qui quibusdam quod! Dolorum, minus?</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolore, dolorem ea expedita ipsa iure labore magnam nesciunt odit officia porro praesentium quia reprehenderit totam veritatis vero vitae. Accusantium aliquam consequuntur cupiditate delectus, dicta eos in, inventore iste laboriosam maxime necessitatibus nemo non odit provident quidem. Asperiores, id, numquam.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolore, dolorem ea expedita ipsa iure labore magnam nesciunt odit officia porro praesentium quia reprehenderit totam veritatis vero vitae. Accusantium aliquam consequuntur cupiditate delectus, dicta eos in, inventore iste laboriosam maxime necessitatibus nemo non odit provident quidem. Asperiores, id, numquam.</div>

                <div className="shop__subGrid">
                    <div className={"box___1"}>SubGrid 1</div>
                    <div className={"box___2"}>SubGrid 2</div>
                    <div className={"box___3"}>SubGrid 3</div>
                    <div className={"box___4"}>SubGrid 4</div>
                    <div className={"box___5"}>SubGrid 5</div>
                    <div className={"box___6"}>SubGrid 6</div>
                    <div className={"box___7"}>SubGrid 7</div>
                    <div className={"box___8"}>SubGrid 8</div>
                </div>

                <div>lorem didn't know shit</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci assumenda, consequatur, consequuntur deleniti distinctio ea expedita explicabo inventore minus molestias nesciunt officiis quas recusandae sunt, temporibus vel voluptates voluptatibus.</div>

                <div>lorem didn't know shit</div>

                <div className="shop__subGridArea">
                    <div className={"box___1"}>SubGrid 1</div>
                    <div className={"box___2"}>SubGrid 2</div>
                    <div className={"box___3"}>SubGrid 3</div>
                    <div className={"box___4"}>SubGrid 4</div>
                </div>

            </div>*/}

        </div>
    );
}
export default Shop