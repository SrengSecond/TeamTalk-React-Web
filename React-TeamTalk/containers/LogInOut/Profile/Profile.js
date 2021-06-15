import React,{useState} from 'react';
import './Profile.css'
import DepartmentButton from "./DepartmentButton/DepartmentButton";
import {useForm} from "react-hook-form";
function Profile(props)
{
    const [baseImage,setBaseImage] = useState("")
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();

    const handleChangeImage = async(e) =>
    {
        console.log("asd");

        const file = e.target.files[0]
        console.log(file);

        const base64 = await convertBase64(file)
        setBaseImage(base64)
    }

    const onSubmit = async (data,event) =>
    {
        const file = data.picture[0]
        console.log(data);

        const base64 = await convertBase64(file)
        console.log(base64);
        
        setBaseImage(base64)
        // console.log(event.target.files[0])
    }
    const onSubmitData = (data) =>
    {
        console.log(data)

    }
    const convertBase64 = (file) =>
    {
        return new Promise((resolve,reject) =>
        {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
               resolve(fileReader.result);
            };

            fileReader.onerror =(error) => {
                reject(error);
            };
        });
    };

    return (
        <div className={"profile"}>
            <div className="profile-flex">
                <form onSubmit={handleSubmit(onSubmitData)}>
                <div className="top">
                    <h1 className={"Title"}>TeamTalk.</h1>
                    <p className={"description"}>
                        Thank you for your information! You’ve almost done registration,<br/>
                        Please fill the optional requirement below to proceed!</p>
                </div>

                <div className="middle">
                    <div className={"middle-department"}>
                        {/*<label>Department</label>*/}
                        {/*<DepartmentButton name={"ITED"}/>*/}
                        {/*<DepartmentButton name={"BIOD"}/>*/}
                        {/*<DepartmentButton name={"TEED"}/>*/}
                        <label>Department</label>
                        <select placeholder={"Activity"} className={"select-Activity"} id={"first-category"} {...register("department")}>
                            <option value={1}>BIOD</option>
                            <option value={2}>ITED</option>
                            <option value={3}>TTED</option>
                        </select>
                    </div>

                    <div className={"middle-category"}>
                        <div className="middle-category-left">

                            <div className={"middle-category-div"}>
                                <label htmlFor={"first-category"}>1st Field of Interest</label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"first-category"} {...register("firstActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                            <div className={"middle-category-div"}>
                                <label htmlFor={"second-category"}>2st Field of Interest</label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"second-category"} {...register("secondActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                            <div className={"middle-category-div"}>
                                <label htmlFor={"Third-category"}>3rd Field of Interest</label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"Third-category"}{...register("thirdActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                        </div>
                        
                        <div className="middle-category-right">
                            <img className={"profile-image"} src={baseImage} alt=""/>
                        </div>
                        <button type="submit">submit</button>

                    </div>
                </div>
                </form>
                value={baseImage}
                <div className="bottom">
                    {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                        <div className="middle-category-right">
                            <input
                                hidden
                                   // onChange={handleChangeImage}
                                   onChange={handleChangeImage}
                                   type="file" {...register("picture")}/>
                        </div>
                        <button type="submit">submit</button>
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
}

export default Profile;