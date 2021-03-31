import React from "react";
import ItemData from "./ItemData";
import './MappingData.css'

function MappingData()
{

    //Solution 1
    const newItemData_1 = ItemData.map(
        function(eachItem)
        {
            return (
                <div className="eachItem">
                    <h3> ItemName: {eachItem.name}</h3>
                    <p> ActivePerk Name: {eachItem.ActivePerk.name}</p>
                    <p> ActivePerk Description: {eachItem.ActivePerk.description}</p>
                    <h5> WeaponBarrel: {eachItem.weaponPerks.barrel}</h5>
                    <h5> WeaponMagazine: {eachItem.weaponPerks.magazine}</h5>
                </div>
            )
        }
    )

    //Solution 2
    const newItemsData_2 = ItemData.map(readData);
    function readData(eachItem)
    {
        return (
            <div className="readEachData">
                <h1>
                    <h3> ItemName: {eachItem.name}</h3>
                    <p> ActivePerk Name: {eachItem.ActivePerk.name}</p>
                    <p> ActivePerk Description: {eachItem.ActivePerk.description}</p>
                    <p> WeaponBarrel: {eachItem.weaponPerks.barrel}</p>
                    <p> WeaponMagazine: {eachItem.weaponPerks.magazine}</p>
                </h1>
            </div>
        )
    }

    //Solution 3
    const newItemsData_3 = ItemData.map((eachItem) =>
    {
        return(
            <div className="readEachData">
                <h1>
                    <h3> ItemName: {eachItem.name}</h3>
                    <p> ActivePerk Name: {eachItem.ActivePerk.name}</p>
                    <p> ActivePerk Description: {eachItem.ActivePerk.description}</p>
                    <p> WeaponBarrel: {eachItem.weaponPerks.barrel}</p>
                    <p> WeaponMagazine: {eachItem.weaponPerks.magazine}</p>
                </h1>
            </div>
        )
    });

    //Solution 4
    const functionConst = (eachItem) =>
    {
        return(
            <div className="readEachData">
                <h1>
                    <h3> ItemName: {eachItem.name}</h3>
                    <p> ActivePerk Name: {eachItem.ActivePerk.name}</p>
                    <p> ActivePerk Description: {eachItem.ActivePerk.description}</p>
                    <p> WeaponBarrel: {eachItem.weaponPerks.barrel}</p>
                    <p> WeaponMagazine: {eachItem.weaponPerks.magazine}</p>
                </h1>
            </div>
        )
    }
    const newItemsData_4 = ItemData.map(functionConst);



    return(
        <div className="mappingData">
            {newItemsData_4}
        </div>
    )
}
export default MappingData